// Tambahkan konstanta STORAGE_KEYS di awal file
const STORAGE_KEYS = {
  BOOKINGS: 'victory_bookings',
  PAYMENT_DATA: 'paymentData'
};

// Tambahkan fungsi handlePaymentConfirmation di awal file, setelah STORAGE_KEYS
async function handlePaymentConfirmation(file) {
  // Simulasi upload file
  await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    // Ambil data payment
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    
    // Ambil booked slots yang ada
    let bookedSlots = JSON.parse(localStorage.getItem('victory_booked_slots') || '[]');
    
    // Tambahkan semua booking ke booked slots
    paymentData.bookings.forEach(booking => {
      bookedSlots.push({
        courtId: booking.courtId,
        date: booking.date,
        time: booking.time,
        duration: booking.duration,
        status: 'BOOKED'
      });
    });

    // Simpan kembali ke localStorage
    localStorage.setItem('victory_booked_slots', JSON.stringify(bookedSlots));

    // Clear payment data
    localStorage.removeItem('paymentData');

    // Tambahkan ke booking history
    const bookingHistory = JSON.parse(localStorage.getItem('victory_booking_history') || '[]');
    bookingHistory.push({
      ...paymentData,
      status: 'BOOKED',
      paymentProof: true,
      confirmedAt: new Date().toISOString()
    });
    localStorage.setItem('victory_booking_history', JSON.stringify(bookingHistory));

    return true;
  } catch (error) {
    console.error('Error saving booking:', error);
    throw new Error('Failed to save booking');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Show loading overlay
  const loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'flex';

  try {
    // Debug logs
    console.log('LocalStorage content:', localStorage.getItem('paymentData'));
    
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    console.log('Parsed payment data:', paymentData);
    
    if (!paymentData) {
      throw new Error('No payment data found');
    }

    // Update validasi untuk multiple bookings
    const requiredFields = ['orderId', 'bookings', 'paymentMethod', 'total'];
    const missingFields = requiredFields.filter(field => !paymentData[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Validasi bookings array
    if (!Array.isArray(paymentData.bookings) || paymentData.bookings.length === 0) {
      throw new Error('Invalid or empty bookings data');
    }

    console.log('Payment Data:', paymentData); // Untuk debugging

    // Update payment header
    document.querySelector('.payment-id').textContent = `Order ID: #${paymentData.orderId}`;
    
    // Update payment method info
    const methodInfo = document.createElement('div');
    methodInfo.className = 'payment-method-info';
    methodInfo.innerHTML = `
      <span>Payment Method: ${paymentData.paymentMethod.name}</span>
    `;
    document.querySelector('.payment-status-header').appendChild(methodInfo);

    // Update bank/payment info
    const bankAccount = document.querySelector('.bank-account');
    bankAccount.innerHTML = `
      <img src="${paymentData.paymentMethod.logo}" alt="${paymentData.paymentMethod.name}" class="bank-logo">
      <div class="account-info">
        <div class="account-number">${paymentData.paymentMethod.accountNumber}</div>
        <div class="account-name">${paymentData.paymentMethod.accountName || paymentData.paymentMethod.name}</div>
      </div>
      <button class="copy-btn" data-copy="${paymentData.paymentMethod.accountNumber}">
        <i class="fas fa-copy"></i>
      </button>
    `;

    // Update total amount
    const amountToPay = paymentData.paymentType === 'dp' ? paymentData.total * 0.5 : paymentData.total;
    document.querySelector('.total-amount').innerHTML = `
      <span>Total Payment</span>
      <strong>Rp ${amountToPay.toLocaleString()}</strong>
      <button class="copy-btn" data-copy="${amountToPay}">
        <i class="fas fa-copy"></i>
      </button>
    `;

    // Update booking details dan order summary
    renderBookingDetails(paymentData);
    renderOrderSummary(paymentData, amountToPay);

    // Show DP note if applicable
    if (paymentData.paymentType === 'dp') {
      document.getElementById('dpNote').style.display = 'flex';
    }

    // Setup countdown timer
    setupCountdown(new Date(paymentData.expiryTime));
    
    // Setup copy buttons
    setupCopyButtons();

    // Setup file upload
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('paymentProof');
    const confirmBtn = document.querySelector('.confirm-upload-btn');
    let uploadedFile = null;

    // Setup drag and drop events
    uploadArea.addEventListener('dragenter', handleDragEvent);
    uploadArea.addEventListener('dragover', handleDragEvent);
    uploadArea.addEventListener('dragleave', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('drag-over');
    });
    uploadArea.addEventListener('drop', handleDrop);

    // Setup click to upload
    uploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      handleFile(file);
    });

    function handleDragEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      uploadArea.classList.add('drag-over');
    }

    function handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      uploadArea.classList.remove('drag-over');
      
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }

    function handleFile(file) {
      if (!file) return;

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        showError('Please upload JPG or PNG file only');
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        showError('File size should be less than 2MB');
        return;
      }

      uploadedFile = file;
      showPreview(file);
      confirmBtn.disabled = false;
    }

    function showPreview(file) {
      const reader = new FileReader();
      
      // Show loading state
      uploadArea.innerHTML = `
        <div class="upload-loading">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Loading preview...</p>
        </div>
      `;

      reader.onload = (e) => {
        uploadArea.innerHTML = `
          <div class="preview-container">
            <img src="${e.target.result}" alt="Payment Proof" class="preview-image">
            <div class="preview-info">
              <p class="file-name">${file.name}</p>
              <p class="file-size">${formatFileSize(file.size)}</p>
            </div>
            <button class="change-file-btn">
              <i class="fas fa-sync-alt"></i>
              Change File
            </button>
          </div>
        `;

        // Setup change file button
        const changeBtn = uploadArea.querySelector('.change-file-btn');
        changeBtn.onclick = (e) => {
          e.stopPropagation();
          resetUpload();
        };
      };

      reader.onerror = () => {
        showError('Error reading file');
        resetUpload();
      };

      reader.readAsDataURL(file);
    }

    function resetUpload() {
      uploadedFile = null;
      fileInput.value = '';
      confirmBtn.disabled = true;
      uploadArea.innerHTML = `
        <div class="upload-content">
          <i class="fas fa-cloud-upload-alt"></i>
          <p>Click or drag image here</p>
          <span>Support: JPG, PNG (max. 2MB)</span>
        </div>
      `;
    }

    function showError(message) {
      alert(message);
      resetUpload();
    }

    function formatFileSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
      else return (bytes / 1048576).toFixed(1) + ' MB';
    }

    // Update event listener untuk confirm button
    confirmBtn.addEventListener('click', async () => {
      if (!uploadedFile) return;

      try {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = `
          <i class="fas fa-spinner fa-spin"></i>
          Uploading...
        `;

        await handlePaymentConfirmation(uploadedFile);
        alert('Payment proof uploaded successfully! We will verify your payment shortly.');
        window.location.href = 'index.html';
      } catch (error) {
        console.error('Upload error:', error);
        showError('Failed to upload payment proof. Please try again.');
        confirmBtn.disabled = false;
        confirmBtn.textContent = 'Confirm Payment';
      }
    });

  } catch (error) {
    console.error('Error loading payment details:', error);
    alert('Error loading payment details: ' + error.message);
    // Redirect back to home page on error
    window.location.href = 'index.html';
  } finally {
    // Hide loading overlay
    loadingOverlay.style.display = 'none';
  }
});

// Helper function untuk format tanggal
function formatDate(date) {
  const options = { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('id-ID', options);
}

// Update countdown timer untuk menggunakan waktu kedaluwarsa yang sebenarnya
function setupCountdown(expiryTime) {
  const countdownEl = document.getElementById('countdown');
  
  const updateTimer = () => {
    const now = new Date().getTime();
    const timeLeft = expiryTime.getTime() - now;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Payment time has expired');
      window.location.href = 'index.html';
      return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = originalHTML;
        }, 2000);
      });
    });
  });
}

// Update bagian render booking details
function renderBookingDetails(paymentData) {
    const bookingDetails = document.querySelector('.booking-details');
    let html = '';
    
    // Render setiap booking
    paymentData.bookings.forEach((booking, index) => {
        const bookingDate = new Date(booking.date);
        html += `
            <div class="detail-section ${index > 0 ? 'mt-3' : ''}">
                <div class="detail-row">
                    <span>Court</span>
                    <span>${booking.courtName}</span>
                </div>
                <div class="detail-row">
                    <span>Date & Time</span>
                    <span>${formatDate(bookingDate)} ${booking.time}</span>
                </div>
                <div class="detail-row">
                    <span>Duration</span>
                    <span>${booking.duration} Hour${booking.duration > 1 ? 's' : ''}</span>
                </div>
                <div class="detail-row">
                    <span>Location</span>
                    <span>${booking.branch}</span>
                </div>
            </div>
        `;
    });

    bookingDetails.innerHTML = html;
}

// Update fungsi renderOrderSummary untuk menampilkan total yang benar
function renderOrderSummary(paymentData, amountToPay) {
    const orderSummary = document.querySelector('.order-summary');
    let html = '<h3>Order Summary</h3>';

    // Render court fees
    paymentData.bookings.forEach(booking => {
        const courtFee = booking.price * booking.duration;
        html += `
            <div class="summary-row">
                <span>${booking.courtName} (${booking.duration} hour${booking.duration > 1 ? 's' : ''})</span>
                <span>Rp ${courtFee.toLocaleString()}</span>
            </div>
        `;
    });

    // Render snacks if any
    if (paymentData.snacks && paymentData.snacks.length > 0) {
        paymentData.snacks.forEach(snack => {
            const itemTotal = snack.price * snack.quantity;
            html += `
                <div class="summary-row">
                    <span>${snack.name} x${snack.quantity}</span>
                    <span>Rp ${itemTotal.toLocaleString()}</span>
                </div>
            `;
        });
    }

    // Add DP info if applicable
    if (paymentData.paymentType === 'dp') {
        html += `
            <div class="summary-row">
                <span>Down Payment (50%)</span>
                <span>Rp ${amountToPay.toLocaleString()}</span>
            </div>
        `;
    }

    // Add total
    html += `
        <div class="summary-row total">
            <strong>Total Payment</strong>
            <strong>Rp ${amountToPay.toLocaleString()}</strong>
        </div>
    `;

    orderSummary.innerHTML = html;
} 