// Data dummy untuk simulasi data dari backend
const DUMMY_DATA = {
  courts: [
    { id: "1", name: "Court 1" },
    { id: "2", name: "Court 2" },
    { id: "3", name: "Court 3" },
    { id: "4", name: "Court 4" },
    { id: "5", name: "Court 5" },
  ],
  bookings: [
    { id: 1, date: "2025-02-13", courtId: "1", time: "08:00", status: "confirmed" },
    { id: 2, date: "2025-02-13", courtId: "1", time: "09:00", status: "confirmed" },
    { id: 3, date: "2025-02-13", courtId: "1", time: "10:00", status: "confirmed" },
    { id: 4, date: "2025-02-13", courtId: "2", time: "08:00", status: "confirmed" },
    { id: 5, date: "2025-02-13", courtId: "2", time: "09:00", status: "confirmed" },
    { id: 6, date: "2025-02-13", courtId: "3", time: "14:00", status: "confirmed" },
    { id: 7, date: "2025-02-13", courtId: "4", time: "19:00", status: "confirmed" },
    { id: 8, date: "2025-02-13", courtId: "4", time: "20:00", status: "confirmed" },
  ],
};

// Data dummy untuk snacks dan minuman
const SNACKS_DATA = {
  drinks: [
    {
      id: 1,
      name: "Aqua",
      price: 5000,
      image: "assets/snacks/drinks/aqua.jpg",
      category: "drinks",
    },
    {
      id: 2,
      name: "Pocari Sweat",
      price: 10000,
      image: "assets/snacks/drinks/pocari.jpg",
      category: "drinks",
    },
    {
      id: 3,
      name: "Coca Cola",
      price: 8000,
      image: "assets/snacks/drinks/cola.jpg",
      category: "drinks",
    },
    {
      id: 4,
      name: "Sprite",
      price: 8000,
      image: "assets/snacks/drinks/sprite.jpg",
      category: "drinks",
    },
    {
      id: 5,
      name: "Teh Pucuk",
      price: 7000,
      image: "assets/snacks/drinks/tehpucuk.jpg",
      category: "drinks",
    },
  ],
  foods: [
    {
      id: 6,
      name: "Roti",
      price: 15000,
      image: "assets/snacks/foods/roti.jpg",
      category: "foods",
    },
    {
      id: 7,
      name: "Snack Mix",
      price: 12000,
      image: "assets/snacks/foods/snack.jpg",
      category: "foods",
    },
    {
      id: 8,
      name: "Oreo",
      price: 10000,
      image: "assets/snacks/foods/oreo.jpg",
      category: "foods",
    },
    {
      id: 9,
      name: "Chitato",
      price: 11000,
      image: "assets/snacks/foods/chitato.jpg",
      category: "foods",
    },
    {
      id: 10,
      name: "Pocky",
      price: 9000,
      image: "assets/snacks/foods/pocky.jpg",
      category: "foods",
    },
  ],
};

// Tambahkan data dummy untuk detail lapangan
const COURTS_DATA = {
  courts: [
    {
      id: "1",
      name: "Court 1",
      image: "assets/court1.jpg",
      description: "Lapangan standar internasional dengan lantai vinyl",
      features: ["Lantai Vinyl", "Indoor", "AC", "Loker"],
      price: 120000,
    },
    {
      id: "2",
      name: "Court 2",
      image: "assets/court2.jpg",
      description: "Lapangan indoor dengan pencahayaan optimal",
      features: ["Lantai Parquette", "Indoor", "AC", "Tribun"],
      price: 100000,
    },
    {
      id: "3",
      name: "Court 3",
      image: "assets/court3.jpg",
      description: "Lapangan multifungsi dengan fasilitas lengkap",
      features: ["Lantai Vinyl", "Indoor", "AC", "Shower"],
      price: 110000,
    },
    {
      id: "4",
      name: "Court 4",
      image: "assets/court4.jpg",
      description: "Lapangan premium dengan tribun penonton",
      features: ["Lantai Parquette", "Indoor", "AC", "Tribun"],
      price: 150000,
    },
    {
      id: "5",
      name: "Court 5",
      image: "assets/court5.jpg",
      description: "Lapangan reguler untuk latihan",
      features: ["Lantai Vinyl", "Indoor", "AC"],
      price: 90000,
    },
  ],
};

// Tambahkan data dummy kota
const CITIES_DATA = [
  {
    id: "JKT",
    name: "Jakarta",
    branches: [
      {
        id: "JKT01",
        name: "Victory Arena Senayan",
        courts: COURTS_DATA.courts
      },
      {
        id: "JKT02",
        name: "Victory Arena Kelapa Gading",
        courts: COURTS_DATA.courts
      }
    ]
  },
  {
    id: "BDG",
    name: "Bandung",
    branches: [
      {
        id: "BDG01",
        name: "Victory Arena Dago",
        courts: COURTS_DATA.courts
      }
    ]
  },
  {
    id: "SBY",
    name: "Surabaya",
    branches: [
      {
        id: "SBY01",
        name: "Victory Arena Pakuwon",
        courts: COURTS_DATA.courts
      }
    ]
  }
];

// Tambahkan data bank yang tersedia
const PAYMENT_METHODS = {
  bank: {
    bca: {
      name: "BCA",
      accountNumber: "0123456789",
      accountName: "PT. VICTORY ARENA",
      logo: "assets/payment/bca.png"
    },
    mandiri: {
      name: "Mandiri",
      accountNumber: "1234567890",
      accountName: "PT. VICTORY ARENA",
      logo: "assets/payment/mandiri.png"
    },
    bni: {
      name: "BNI",
      accountNumber: "9876543210",
      accountName: "PT. VICTORY ARENA",
      logo: "assets/payment/bni.png"
    }
  },
  ewallet: {
    ovo: {
      name: "OVO",
      accountNumber: "081234567890",
      logo: "assets/payment/ovo.png"
    },
    gopay: {
      name: "GoPay",
      accountNumber: "081234567890",
      logo: "assets/payment/gopay.png"
    }
  }
};

// Tambahkan konstanta untuk menyimpan booking data
const STORAGE_KEYS = {
  BOOKINGS: 'victory_bookings',
  PAYMENT_DATA: 'paymentData'
};

// Tambahkan di awal file, setelah konstanta yang ada
const CART_STORAGE_KEY = 'victory_cart';

class BookingSystem {
  constructor() {
    this.currentDate = new Date(2025, 1, 14);
    this.selectedDate = new Date(2025, 1, 13);
    this.courts = [];
    this.bookings = [];
    this.timeSlots = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];
    this.selectedCity = null;
    this.duration = 1;
    this.selectedCourt = null;
    this.cart = this.loadCart();
    this.updateCartDisplay();
    this.bookedSlots = this.loadBookedSlots();

    // Simulasi fetch data dari backend
    this.fetchData();
    this.init();
    this.setupNavigationButtons();
    this.initCitySelector();
  }

  // Simulasi API calls
  async fetchData() {
    try {
      // Simulasi network request
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Set data dari backend (dummy)
      this.courts = DUMMY_DATA.courts;
      this.bookings = DUMMY_DATA.bookings;

      // Re-render setelah data diambil
      this.renderTimeColumn();
      this.renderScheduleGrid();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async createBooking(date, courtId, time) {
    try {
      // Simulasi network request
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Simulasi response dari backend
      const newBooking = {
        id: Date.now(), // Gunakan timestamp sebagai ID sementara
        date: date,
        courtId: courtId,
        time: time,
        status: "confirmed",
      };

      // Update local data
      this.bookings.push(newBooking);

      return newBooking;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  }

  init() {
    this.renderDateButtons();
    this.renderScheduleGrid();
    this.renderTimeColumn(); // Tambah method baru untuk render kolom waktu
  }

  renderTimeColumn() {
    const timeColumn = document.querySelector(".time-column");
    timeColumn.innerHTML = "";

    const emptyHeader = document.createElement("div");
    emptyHeader.className = "time-slot";
    timeColumn.appendChild(emptyHeader);

    this.timeSlots.forEach((time) => {
      const timeSlot = document.createElement("div");
      timeSlot.className = "time-slot";
      timeSlot.textContent = time;
      timeColumn.appendChild(timeSlot);
    });
  }

  renderScheduleGrid() {
    // Update court headers
    const courtHeaders = document.querySelector(".court-headers");
    courtHeaders.innerHTML = "";
    
    // Gunakan courts dari branch yang dipilih atau courts default
    const courtsToRender = this.selectedCity ? 
      this.selectedCity.branches[0].courts : 
      COURTS_DATA.courts;

    courtsToRender.forEach((court) => {
      const header = document.createElement("div");
      header.className = "court-header";
      header.textContent = court.name;
      courtHeaders.appendChild(header);
    });

    // Update court grid
    const grid = document.querySelector(".courts-grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${courtsToRender.length}, 1fr)`;

    this.timeSlots.forEach((time) => {
      courtsToRender.forEach((court) => {
        const slot = document.createElement("div");
        const isBooked = this.isBooked(this.formatDate(this.selectedDate), court.id, time);
        const isSelected = this.isInCart(court.id, time);

        slot.className = `court-slot ${isBooked ? "booked" : "available"} ${isSelected ? "selected" : ""}`;

        if (isBooked) {
          slot.innerHTML = '<span class="booked-text">BOOKED</span>';
          slot.classList.add('booked');
        } else if (isSelected) {
          slot.innerHTML = ''; // Icon check akan ditampilkan via CSS
        } else {
          slot.addEventListener("click", () => this.handleBooking(time, court));
        }

        grid.appendChild(slot);
      });
    });
  }

  async handleBooking(time, court) {
    try {
      if (!this.selectedCity) {
        throw new Error("Silakan pilih kota terlebih dahulu");
      }

      // Add to cart instead of showing booking modal directly
      this.addToCart(time, court);

    } catch (error) {
      alert(error.message || "Gagal memproses booking. Silakan coba lagi.");
    }
  }

  setupDurationControls() {
    const minusBtn = document.querySelector('.duration-btn.minus');
    const plusBtn = document.querySelector('.duration-btn.plus');
    const input = document.getElementById('durationInput');

    // Update button states
    const updateButtons = () => {
      minusBtn.disabled = this.duration <= 1;
      plusBtn.disabled = this.duration >= 4;
    };

    minusBtn.onclick = () => {
      if (this.duration > 1) {
        this.duration--;
        input.value = this.duration;
        updateButtons();
        this.updateSummary(); // Update summary saat durasi berubah
      }
    };

    plusBtn.onclick = () => {
      if (this.duration < 4) {
        this.duration++;
        input.value = this.duration;
        updateButtons();
        this.updateSummary(); // Update summary saat durasi berubah
      }
    };

    // Set initial button states
    updateButtons();
  }

  updateSummary() {
    if (!this.selectedCourt) return;

    const courtFee = this.selectedCourt.price * this.duration;
    document.querySelector('.summary-items p').innerHTML = 
      `Court Fee (${this.duration} hour${this.duration > 1 ? 's' : ''}): <span>Rp ${courtFee.toLocaleString()}</span>`;

    // Update total
    let snacksTotal = 0;
    document.querySelectorAll(".qty-input").forEach((input) => {
      const quantity = parseInt(input.value);
      const price = parseInt(input.dataset.price);
      if (quantity > 0) {
        snacksTotal += quantity * price;
      }
    });

    const total = courtFee + snacksTotal;
    document.getElementById("totalAmount").textContent = `Rp ${total.toLocaleString()}`;
  }

  calculateTotal(snacks) {
    if (!this.selectedCourt) return 0;
    
    const courtFee = this.selectedCourt.price * this.duration;
    const snacksTotal = snacks.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return courtFee + snacksTotal;
  }

  async createBookingWithSnacks(date, courtId, time, snacks) {
    try {
      if (!this.selectedCity) {
        throw new Error("Silakan pilih kota terlebih dahulu");
      }

      const newBooking = {
        id: Date.now(),
        date: date,
        courtId: courtId,
        time: time,
        duration: this.duration,
        status: "confirmed",
        snacks: snacks,
        totalAmount: this.calculateTotal(snacks),
        city: this.selectedCity.name,
        branch: this.selectedCity.branches[0].name
      };

      // Tambahkan booking untuk setiap jam sesuai durasi
      for (let i = 0; i < this.duration; i++) {
        const bookingTime = this.addHours(time, i);
        this.bookings.push({
          ...newBooking,
          time: bookingTime
        });
      }

      return newBooking;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  }

  // Helper function untuk menambah jam
  addHours(time, hours) {
    const [hour, minute] = time.split(':').map(Number);
    const newHour = (hour + hours) % 24;
    return `${String(newHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  renderDateButtons() {
    const dates = document.querySelector(".dates");
    dates.innerHTML = "";

    // Generate 7 hari dari tanggal saat ini
    for (let i = -3; i <= 3; i++) {
      const date = new Date(this.currentDate);
      date.setDate(date.getDate() + i);

      const btn = document.createElement("button");
      btn.className = `date-btn ${this.isSameDate(date, this.selectedDate) ? "selected" : ""}`;

      const dateSpan = document.createElement("span");
      dateSpan.className = "date";
      dateSpan.textContent = date.getDate();

      const monthSpan = document.createElement("span");
      monthSpan.className = "month";
      monthSpan.textContent = this.getMonthName(date.getMonth());

      btn.appendChild(dateSpan);
      btn.appendChild(monthSpan);

      btn.addEventListener("click", () => this.selectDate(date));

      dates.appendChild(btn);
    }
  }

  selectDate(date) {
    this.selectedDate = date;
    this.renderDateButtons();
    this.renderScheduleGrid();
  }

  isSameDate(date1, date2) {
    return this.formatDate(date1) === this.formatDate(date2);
  }

  formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  getMonthName(month) {
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    return months[month];
  }

  isBooked(date, courtId, time) {
    // Cek dari booked slots di localStorage
    const bookedSlots = JSON.parse(localStorage.getItem('victory_booked_slots') || '[]');
    
    return bookedSlots.some(slot => 
      slot.date === date &&
      slot.courtId === courtId &&
      slot.time === time &&
      slot.status === 'BOOKED'
    );
  }

  setupNavigationButtons() {
    const prevWeekBtn = document.querySelector(".prev-week");
    const nextWeekBtn = document.querySelector(".next-week");

    prevWeekBtn.addEventListener("click", () => this.navigateWeek(-1));
    nextWeekBtn.addEventListener("click", () => this.navigateWeek(1));

    this.updateMonthDisplay();
  }

  navigateWeek(direction) {
    // Pindah satu minggu ke depan atau belakang
    this.currentDate.setDate(this.currentDate.getDate() + direction * 7);
    this.updateMonthDisplay();
    this.renderDateButtons();
  }

  updateMonthDisplay() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const monthDisplay = document.querySelector(".current-month");
    const month = monthNames[this.currentDate.getMonth()];
    const year = this.currentDate.getFullYear();

    monthDisplay.textContent = `${month} ${year}`;
  }

  // Tambahkan method untuk initialize Swiper
  initializeSnacksSwiper() {
    new Swiper(".snacks-swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  // Tambah method baru untuk render snacks
  renderSnacks() {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = ""; // Clear existing content

    // Render drinks
    SNACKS_DATA.drinks.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <div class="snack-item">
          <img src="${item.image}" alt="${item.name}" />
          <h4>${item.name}</h4>
          <p>Rp ${item.price.toLocaleString()}</p>
          <div class="quantity-control">
            <button class="qty-btn minus">-</button>
            <input type="number" 
              class="qty-input" 
              value="0" 
              min="0" 
              max="10" 
              data-price="${item.price}"
              data-name="${item.name}"
              readonly
            />
            <button class="qty-btn plus">+</button>
          </div>
        </div>
      `;
      swiperWrapper.appendChild(slide);
    });

    // Render foods
    SNACKS_DATA.foods.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <div class="snack-item">
          <img src="${item.image}" alt="${item.name}" />
          <h4>${item.name}</h4>
          <p>Rp ${item.price.toLocaleString()}</p>
          <div class="quantity-control">
            <button class="qty-btn minus">-</button>
            <input type="number" 
              class="qty-input" 
              value="0" 
              min="0" 
              max="10" 
              data-price="${item.price}"
              data-name="${item.name}"
              readonly
            />
            <button class="qty-btn plus">+</button>
          </div>
        </div>
      `;
      swiperWrapper.appendChild(slide);
    });

    // Setup quantity controls setelah render
    this.setupQuantityControls();
  }

  // Tambahkan method setupQuantityControls ke dalam class
  setupQuantityControls() {
    document.querySelectorAll(".snack-item .qty-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const input = btn.parentElement.querySelector(".qty-input");
        const currentValue = parseInt(input.value) || 0;

        if (btn.classList.contains("minus")) {
          if (currentValue > 0) {
            input.value = currentValue - 1;
          }
        } else {
          if (currentValue < 10) {
            input.value = currentValue + 1;
          }
        }

        this.updateTotal();
      });
    });

    document.querySelectorAll(".snack-item .qty-input").forEach((input) => {
      input.addEventListener("input", () => {
        let value = parseInt(input.value) || 0;
        value = Math.min(Math.max(value, 0), 10);
        input.value = value;
        this.updateTotal();
      });
    });
  }

  initCitySelector() {
    const citySelect = document.getElementById('citySelect');
    
    // Populate city options
    CITIES_DATA.forEach(city => {
      const option = document.createElement('option');
      option.value = city.id;
      option.textContent = city.name;
      citySelect.appendChild(option);
    });

    // Add change event listener
    citySelect.addEventListener('change', (e) => {
      this.selectedCity = CITIES_DATA.find(city => city.id === e.target.value);
      if (this.selectedCity) {
        this.updateBranchInfo();
      }
    });
  }

  updateBranchInfo() {
    const titleSection = document.querySelector('.title-section h2');
    if (this.selectedCity && this.selectedCity.branches.length > 0) {
      // Untuk sementara kita gunakan branch pertama
      const branch = this.selectedCity.branches[0];
      titleSection.textContent = `${branch.name} - Choose Schedule & Field`;
      
      // Update courts data
      this.courts = branch.courts;
      this.renderScheduleGrid();
    } else {
      titleSection.textContent = 'Choose the available schedule & field';
      this.courts = [];
      this.renderScheduleGrid();
    }
  }

  showPaymentModal(date, courtId, time, snacks) {
    const modal = document.getElementById("paymentModal");
    modal.style.display = "block";

    // Setup back button
    const backBtn = modal.querySelector(".back-btn");
    backBtn.onclick = () => {
      modal.style.display = "none";
      document.getElementById("bookingModal").style.display = "block";
    };

    const totalAmount = this.calculateTotal(snacks);
    const dpAmount = totalAmount * 0.5;

    // Update amounts
    document.getElementById("fullPaymentAmount").textContent = `Rp ${totalAmount.toLocaleString()}`;
    document.getElementById("dpPaymentAmount").textContent = `Rp ${dpAmount.toLocaleString()}`;
    document.getElementById("subtotalAmount").textContent = `Rp ${totalAmount.toLocaleString()}`;
    document.getElementById("finalAmount").textContent = `Rp ${totalAmount.toLocaleString()}`;

    // Handle payment type change
    const paymentTypes = document.querySelectorAll('input[name="paymentType"]');
    paymentTypes.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const dpNote = document.getElementById("dpNote");
        dpNote.style.display = e.target.value === "dp" ? "flex" : "none";
        
        // Update final amount based on payment type
        const finalAmount = e.target.value === "dp" ? dpAmount : totalAmount;
        document.getElementById("finalAmount").textContent = `Rp ${finalAmount.toLocaleString()}`;
      });
    });

    // Handle confirm payment
    const confirmBtn = modal.querySelector(".confirm-payment-btn");
    confirmBtn.addEventListener('click', async () => {
      try {
        const paymentType = document.querySelector('input[name="paymentType"]:checked')?.value;
        if (!paymentType) {
          throw new Error('Please select a payment type');
        }

        const paymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethodInput) {
          throw new Error('Please select a payment method');
        }

        // Dapatkan provider dari data-provider attribute
        const methodType = paymentMethodInput.getAttribute('data-type');
        const provider = paymentMethodInput.getAttribute('data-provider');
        const paymentMethod = `${methodType}-${provider}`;

        await this.processPayment(date, courtId, time, snacks, paymentType, paymentMethod);
        modal.style.display = "none";
        document.getElementById("bookingModal").style.display = "none";
        this.renderScheduleGrid();
      } catch (error) {
        alert(error.message);
      }
    });

    // Setup close button
    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.onclick = () => {
      if (confirm('Are you sure you want to cancel the payment process?')) {
        modal.style.display = "none";
        document.getElementById('bookingModal').style.display = 'block';
      }
    };

    // Close when clicking outside
    window.onclick = (event) => {
      if (event.target === modal) {
        if (confirm('Are you sure you want to cancel the payment process?')) {
          modal.style.display = "none";
          document.getElementById('bookingModal').style.display = 'block';
        }
      }
    };
  }

  applyPromoCode(code, totalAmount) {
    // Simulasi promo code
    const promoRow = document.getElementById("promoRow");
    const promoAmount = document.getElementById("promoAmount");
    const finalAmount = document.getElementById("finalAmount");
    
    if (code.toUpperCase() === "VICTORY10") {
      const discount = totalAmount * 0.1;
      promoRow.style.display = "flex";
      promoAmount.textContent = `-Rp ${discount.toLocaleString()}`;
      finalAmount.textContent = `Rp ${(totalAmount - discount).toLocaleString()}`;
    } else {
      alert("Invalid promo code");
    }
  }

  async processPayment(date, courtId, time, snacks, paymentType, paymentMethod) {
    try {
      console.log('Payment Method:', paymentMethod);
      console.log('Payment Type:', paymentType);

      const booking = await this.createBookingWithSnacks(date, courtId, time, snacks);
      const selectedBranch = this.getCityBranch();
      
      const [methodType, provider] = paymentMethod.split('-');
      const methodDetails = PAYMENT_METHODS[methodType][provider];

      if (!methodDetails) {
        throw new Error('Invalid payment method');
      }
      
      // Simpan data booking ke localStorage
      const paymentData = {
        orderId: `VC${Date.now()}`,
        booking: {
          ...booking,
          orderId: `VC${Date.now()}`,
          courtName: this.selectedCourt.name,
          price: this.selectedCourt.price,
          duration: parseInt(document.getElementById('durationInput').value),
          branch: selectedBranch.name,
          date: date,
          time: time,
          city: this.selectedCity.name,
          status: 'pending'
        },
        paymentType: paymentType,
        paymentMethod: methodDetails,
        total: this.calculateTotal(snacks),
        createdAt: new Date().toISOString(),
        expiryTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      };
      
      // Simpan ke localStorage
      localStorage.setItem(STORAGE_KEYS.PAYMENT_DATA, JSON.stringify(paymentData));
      
      // Simpan booking sementara
      const existingBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
      existingBookings.push(paymentData.booking);
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(existingBookings));
      
      // Tambahkan booking ke booked slots
      this.bookedSlots.push({
        courtId: courtId,
        date: date,
        time: time,
        duration: parseInt(document.getElementById('durationInput').value)
      });

      // Simpan booked slots
      this.saveBookedSlots();

      window.location.href = 'payment-confirmation.html';
    } catch (error) {
      console.error('Payment Error:', error);
      alert(error.message || "Payment failed. Please try again.");
    }
  }

  // Update method getCityBranch
  getCityBranch() {
    // Gunakan citySelect yang sudah ada
    const cityId = document.getElementById('citySelect').value;
    
    // Pastikan ada city yang dipilih
    if (!cityId) {
      throw new Error('Please select a city first');
    }
    
    const city = CITIES_DATA.find(city => city.id === cityId);
    if (!city) {
      throw new Error('City not found');
    }
    
    // Untuk sementara kita ambil branch pertama dari city yang dipilih
    const branch = city.branches[0];
    if (!branch) {
      throw new Error('Branch not found');
    }
    
    return branch;
  }

  loadCart() {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    this.updateCartDisplay();
  }

  updateCartDisplay() {
    const floatingCart = document.getElementById('floatingCart');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    if (this.cart.length > 0) {
      floatingCart.style.display = 'flex';
      cartCount.textContent = this.cart.length;
      const total = this.cart.reduce((sum, item) => sum + item.price, 0);
      cartTotal.textContent = `Rp ${total.toLocaleString()}`;
    } else {
      floatingCart.style.display = 'none';
    }
  }

  addToCart(time, court) {
    if (!this.selectedCity) {
      alert('Silakan pilih kota terlebih dahulu');
      return;
    }

    if (this.isInCart(court.id, time)) {
      alert('Lapangan ini sudah ada di cart');
      return;
    }

    const cartItem = {
      id: Date.now(),
      courtId: court.id,
      courtName: court.name,
      time: time,
      date: this.formatDate(this.selectedDate),
      price: court.price,
      city: this.selectedCity.name,
      branch: this.selectedCity.branches[0].name,
      duration: 1 // Tambahkan default duration
    };

    this.cart.push(cartItem);
    this.saveCart();

    const slot = this.findCourtSlot(court.id, time);
    if (slot) {
      slot.classList.add('selected', 'just-selected');
      setTimeout(() => {
        slot.classList.remove('just-selected');
      }, 300);
    }
  }

  removeFromCart(itemId) {
    const removedItem = this.cart.find(item => item.id === itemId);
    if (removedItem) {
      // Hapus visual selected dari grid
      const slot = this.findCourtSlot(removedItem.courtId, removedItem.time);
      if (slot) {
        slot.classList.remove('selected');
      }
    }

    this.cart = this.cart.filter(item => item.id !== itemId);
    this.saveCart();
    this.showCartDetails();
  }

  showCartDetails() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const modalCartTotal = document.getElementById('modalCartTotal');

    cartItems.innerHTML = '';
    
    this.cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <div class="cart-item-header">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.courtName}</div>
            <div class="cart-item-details">
              ${item.city} - ${item.branch}<br>
              ${item.date} ${item.time}
            </div>
          </div>
          <button class="remove-item" onclick="removeCartItem(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <div class="cart-duration-control">
          <button onclick="updateCartDuration(${item.id}, -1)" ${item.duration <= 1 ? 'disabled' : ''}>
            <i class="fas fa-minus"></i>
          </button>
          <div class="cart-duration-display">
            <span class="cart-duration-value">${item.duration}</span>
            <span class="cart-duration-label">hour${item.duration > 1 ? 's' : ''}</span>
          </div>
          <button onclick="updateCartDuration(${item.id}, 1)" ${item.duration >= 4 ? 'disabled' : ''}>
            <i class="fas fa-plus"></i>
          </button>
          <div class="cart-item-price">Rp ${(item.price * item.duration).toLocaleString()}</div>
        </div>
      `;
      cartItems.appendChild(itemElement);
    });

    const total = this.cart.reduce((sum, item) => sum + (item.price * item.duration), 0);
    modalCartTotal.textContent = `Rp ${total.toLocaleString()}`;

    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.onclick = () => modal.style.display = 'none';

    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  updateCartItemDuration(itemId, change) {
    const item = this.cart.find(item => item.id === itemId);
    if (item) {
      const newDuration = item.duration + change;
      if (newDuration >= 1 && newDuration <= 4) {
        item.duration = newDuration;
        this.saveCart();
        this.showCartDetails(); // Refresh cart display
      }
    }
  }

  async proceedToCheckout() {
    if (this.cart.length === 0) {
      alert('Cart is empty');
      return;
    }

    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';

    // Update city & branch info
    const cityBranchInfo = `${this.cart[0].city} - ${this.cart[0].branch}`;
    document.getElementById('selectedCityBranch').textContent = cityBranchInfo;
    
    // Update courts info dengan format baru
    const courtsHtml = this.cart.map(item => `
      <div class="court-item">
        <div class="court-info">
          <span class="court-name">${item.courtName}</span>
          <span class="court-schedule">${item.time} (${item.duration} hour${item.duration > 1 ? 's' : ''})</span>
        </div>
        <span class="court-price">Rp ${(item.price * item.duration).toLocaleString()}</span>
      </div>
    `).join('');
    
    document.getElementById('selectedCourt').innerHTML = courtsHtml;

    // Update total price
    const totalPrice = this.cart.reduce((sum, item) => sum + (item.price * item.duration), 0);
    document.getElementById('pricePerHour').textContent = `Rp ${totalPrice.toLocaleString()}`;
    
    // Update date dengan format yang lebih bagus
    const formattedDate = new Date(this.cart[0].date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById('selectedDate').textContent = formattedDate;

    // Hide cart modal
    document.getElementById('cartModal').style.display = 'none';

    // Reset dan initialize snacks
    document.querySelectorAll('.qty-input').forEach(input => {
      input.value = 0;
    });
    this.updateBookingSummary();
    this.renderSnacks();
    this.initializeSnacksSwiper();

    // Setup modal close buttons
    this.setupModalCloseBtns();
  }

  // Update method untuk update booking summary
  updateBookingSummary() {
    const summaryItems = document.querySelector('.summary-items');
    let html = '';

    // Add court fees
    this.cart.forEach(item => {
      const courtFee = item.price * item.duration;
      html += `
        <p>${item.courtName} (${item.time}, ${item.duration} hour${item.duration > 1 ? 's' : ''}): 
          <span>Rp ${courtFee.toLocaleString()}</span>
        </p>
      `;
    });

    // Add snacks section
    html += `<div id="snacksSummary"></div>`;

    // Add total
    const totalCourtFees = this.cart.reduce((sum, item) => sum + (item.price * item.duration), 0);
    html += `
      <div class="total">
        <strong>Total: <span id="totalAmount">Rp ${totalCourtFees.toLocaleString()}</span></strong>
      </div>
    `;

    summaryItems.innerHTML = html;
  }

  // Tambahkan method untuk mengecek apakah lapangan sudah di cart
  isInCart(courtId, time) {
    return this.cart.some(item => 
      item.courtId === courtId && 
      item.time === time && 
      item.date === this.formatDate(this.selectedDate)
    );
  }

  // Tambahkan method untuk mencari slot lapangan
  findCourtSlot(courtId, time) {
    const grid = document.querySelector('.courts-grid');
    const courts = this.selectedCity ? 
      this.selectedCity.branches[0].courts : 
      COURTS_DATA.courts;
    
    const courtIndex = courts.findIndex(c => c.id === courtId);
    const timeIndex = this.timeSlots.indexOf(time);
    
    if (courtIndex === -1 || timeIndex === -1) return null;
    
    const slotIndex = timeIndex * courts.length + courtIndex;
    return grid.children[slotIndex];
  }

  updateTotal() {
    const courtTotal = this.cart.reduce((sum, item) => sum + (item.price * item.duration), 0);
    let snacksTotal = 0;
    const snacksSummary = document.getElementById("snacksSummary");
    snacksSummary.innerHTML = "";

    document.querySelectorAll(".snack-item .qty-input").forEach((input) => {
      const quantity = parseInt(input.value) || 0;
      const price = parseInt(input.dataset.price);
      if (quantity > 0) {
        const itemTotal = quantity * price;
        snacksTotal += itemTotal;
        snacksSummary.innerHTML += `
          <p>${input.dataset.name} x${quantity}: <span>Rp ${itemTotal.toLocaleString()}</span></p>
        `;
      }
    });

    const total = courtTotal + snacksTotal;
    document.getElementById("totalAmount").textContent = `Rp ${total.toLocaleString()}`;
  }

  proceedToPayment() {
    // Validasi ada item yang dipilih
    if (this.cart.length === 0) {
      alert('Please select at least one court');
      return;
    }

    // Hitung total dari court dan snacks
    const courtTotal = this.cart.reduce((sum, item) => sum + (item.price * item.duration), 0);
    let snacksTotal = 0;
    
    document.querySelectorAll(".snack-item .qty-input").forEach((input) => {
      const quantity = parseInt(input.value) || 0;
      const price = parseInt(input.dataset.price);
      if (quantity > 0) {
        snacksTotal += quantity * price;
      }
    });

    const total = courtTotal + snacksTotal;

    // Update payment modal values
    document.getElementById('subtotalAmount').textContent = `Rp ${total.toLocaleString()}`;
    document.getElementById('finalAmount').textContent = `Rp ${total.toLocaleString()}`;
    document.getElementById('fullPaymentAmount').textContent = `Rp ${total.toLocaleString()}`;
    document.getElementById('dpPaymentAmount').textContent = `Rp ${(total * 0.5).toLocaleString()}`;

    // Hide booking modal and show payment modal
    document.getElementById('bookingModal').style.display = 'none';
    document.getElementById('paymentModal').style.display = 'block';

    // Setup payment modal setelah menampilkan
    this.setupPaymentModal();
  }

  setupModalCloseBtns() {
    // Setup close button untuk booking modal
    const bookingModal = document.getElementById('bookingModal');
    const bookingCloseBtn = bookingModal.querySelector('.close-btn');
    
    bookingCloseBtn.onclick = () => {
      if (confirm('Are you sure you want to cancel the booking process?')) {
        bookingModal.style.display = 'none';
        // Reset snacks selection
        document.querySelectorAll('.qty-input').forEach(input => {
          input.value = 0;
        });
        this.updateTotal();
      }
    };

    // Close when clicking outside modal
    window.onclick = (event) => {
      if (event.target === bookingModal) {
        if (confirm('Are you sure you want to cancel the booking process?')) {
          bookingModal.style.display = 'none';
          // Reset snacks selection
          document.querySelectorAll('.qty-input').forEach(input => {
            input.value = 0;
          });
          this.updateTotal();
        }
      }
    };
  }

  setupPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    const closeBtn = paymentModal.querySelector('.close-btn');
    const backBtn = paymentModal.querySelector('.back-btn');
    const confirmBtn = paymentModal.querySelector('.confirm-payment-btn');
    const dpPayment = document.getElementById('dpPayment');
    const dpNote = document.getElementById('dpNote');
    const promoInput = document.getElementById('promoCode');
    const applyPromoBtn = paymentModal.querySelector('.apply-promo-btn');

    // Handle close button
    closeBtn.onclick = () => {
      if (confirm('Are you sure you want to cancel the payment process?')) {
        paymentModal.style.display = 'none';
        document.getElementById('bookingModal').style.display = 'block';
      }
    };

    // Handle back button
    backBtn.onclick = () => {
      paymentModal.style.display = 'none';
      document.getElementById('bookingModal').style.display = 'block';
    };

    // Handle payment type change
    dpPayment.onchange = () => {
      dpNote.style.display = dpPayment.checked ? 'flex' : 'none';
      this.updatePaymentAmount();
    };

    // Handle promo code
    applyPromoBtn.onclick = () => {
      const promoCode = promoInput.value.trim().toUpperCase();
      if (promoCode === 'VICTORY10') {
        alert('Promo code applied successfully! 10% discount');
        document.getElementById('promoRow').style.display = 'flex';
        this.updatePaymentAmount(0.1); // 10% discount
      } else {
        alert('Invalid promo code');
      }
    };

    // Handle confirm payment
    confirmBtn.addEventListener('click', () => {
      const paymentType = document.querySelector('input[name="paymentType"]:checked')?.value || 'full';
      const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');
      
      if (!selectedPayment) {
        alert('Please select a payment method');
        return;
      }

      // Dapatkan detail metode pembayaran
      const paymentMethod = {
        type: selectedPayment.dataset.type,
        provider: selectedPayment.dataset.provider,
        name: selectedPayment.nextElementSibling.querySelector('span').textContent,
        logo: selectedPayment.nextElementSibling.querySelector('img').src,
        accountNumber: this.getAccountNumber(selectedPayment.dataset.provider),
        accountName: "Victory Badminton"
      };

      // Generate order ID
      const orderId = `VB${Date.now()}`;

      // Persiapkan data booking untuk multiple courts
      const bookings = this.cart.map(item => ({
        courtId: item.courtId,
        courtName: item.courtName,
        date: item.date,
        time: item.time,
        duration: item.duration,
        price: item.price,
        branch: item.branch
      }));

      // Simpan data pembayaran
      const paymentData = {
        orderId: orderId,
        cart: this.cart,
        bookings: bookings,
        snacks: this.getSelectedSnacks(),
        paymentType: paymentType,
        paymentMethod: paymentMethod,
        total: parseInt(document.getElementById('finalAmount').textContent.replace(/[^\d]/g, '')),
        timestamp: new Date().toISOString(),
        expiryTime: new Date(Date.now() + 60 * 60 * 1000).toISOString()
      };

      // Simpan data pembayaran ke localStorage
      localStorage.setItem('paymentData', JSON.stringify(paymentData));

      // Reset status booking di grid
      this.cart.forEach(item => {
        const slot = this.findCourtSlot(item.courtId, item.time);
        if (slot) {
          slot.classList.remove('selected');
        }
      });

      // Kosongkan cart
      this.cart = [];
      this.saveCart();
      this.updateCartDisplay();

      // Redirect ke halaman konfirmasi pembayaran
      window.location.href = 'payment-confirmation.html';
    });

    // Close when clicking outside
    window.onclick = (event) => {
      if (event.target === paymentModal) {
        if (confirm('Are you sure you want to cancel the payment process?')) {
          paymentModal.style.display = 'none';
          document.getElementById('bookingModal').style.display = 'block';
        }
      }
    };
  }

  updatePaymentAmount(discount = 0) {
    const courtTotal = this.cart.reduce((sum, item) => sum + (item.price * item.duration), 0);
    let snacksTotal = 0;
    
    document.querySelectorAll(".snack-item .qty-input").forEach((input) => {
      const quantity = parseInt(input.value) || 0;
      const price = parseInt(input.dataset.price);
      if (quantity > 0) {
        snacksTotal += quantity * price;
      }
    });

    const subtotal = courtTotal + snacksTotal;
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;

    document.getElementById('subtotalAmount').textContent = `Rp ${subtotal.toLocaleString()}`;
    document.getElementById('promoAmount').textContent = `-Rp ${discountAmount.toLocaleString()}`;
    document.getElementById('finalAmount').textContent = `Rp ${total.toLocaleString()}`;
    
    const isDP = document.getElementById('dpPayment').checked;
    const paymentAmount = isDP ? total * 0.5 : total;
    
    document.getElementById('fullPaymentAmount').textContent = `Rp ${total.toLocaleString()}`;
    document.getElementById('dpPaymentAmount').textContent = `Rp ${(total * 0.5).toLocaleString()}`;
  }

  getSelectedSnacks() {
    const snacks = [];
    document.querySelectorAll(".snack-item .qty-input").forEach((input) => {
      const quantity = parseInt(input.value) || 0;
      if (quantity > 0) {
        snacks.push({
          name: input.dataset.name,
          quantity: quantity,
          price: parseInt(input.dataset.price)
        });
      }
    });
    return snacks;
  }

  // Helper method untuk mendapatkan nomor rekening
  getAccountNumber(provider) {
    const accountNumbers = {
      bca: "1234567890",
      mandiri: "0987654321",
      bni: "1122334455",
      ovo: "081234567890",
      gopay: "081234567890"
    };
    return accountNumbers[provider] || "0000000000";
  }

  // Tambahkan method untuk load dan save booked slots
  loadBookedSlots() {
    const savedSlots = localStorage.getItem('victory_booked_slots');
    return savedSlots ? JSON.parse(savedSlots) : [];
  }

  saveBookedSlots() {
    localStorage.setItem('victory_booked_slots', JSON.stringify(this.bookedSlots));
  }
}

// Inisialisasi sistem booking ketika halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const bookingSystem = new BookingSystem();
  document.querySelector('.app-container').__bookingSystem = bookingSystem;
});

// Update fungsi showCourtDetails
function showCourtDetails() {
  const modal = document.getElementById("courtDetailsModal");
  modal.style.display = "block";

  // Render court details
  const courtDetailsGrid = modal.querySelector(".court-details-grid");
  courtDetailsGrid.innerHTML = "";

  COURTS_DATA.courts.forEach((court) => {
    const courtDetail = document.createElement("div");
    courtDetail.className = "court-detail";

    const features = court.features.map((feature) => `<span class="feature-tag">${feature}</span>`).join("");

    courtDetail.innerHTML = `
      <img src="${court.image}" alt="${court.name}" />
      <h3>${court.name}</h3>
      <p class="court-description">${court.description}</p>
      <div class="features-container">
        ${features}
      </div>
      <p class="court-price">Rp ${court.price.toLocaleString()}/jam</p>
    `;

    courtDetailsGrid.appendChild(courtDetail);
  });

  // Setup close button
  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close when clicking outside
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// Update setupQuantityControls function
function setupQuantityControls() {
  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent form submission
      const input = this.parentElement.querySelector(".qty-input");
      const currentValue = parseInt(input.value) || 0;

      if (this.classList.contains("minus")) {
        if (currentValue > 0) {
          input.value = currentValue - 1;
        }
      } else {
        if (currentValue < 10) {
          input.value = currentValue + 1;
        }
      }

      const bookingSystem = document.querySelector('.app-container').__bookingSystem;
      bookingSystem.updateTotal();
    });
  });

  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("input", () => {
      let value = parseInt(input.value) || 0;
      value = Math.min(Math.max(value, 0), 10); // Batasi antara 0-10
      input.value = value;
      
      const bookingSystem = document.querySelector('.app-container').__bookingSystem;
      bookingSystem.updateTotal();
    });

    // Prevent non-numeric input
    input.addEventListener("keypress", (e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });
  });
}

function getSelectedSnacks() {
  const snacks = [];
  document.querySelectorAll(".qty-input").forEach((input) => {
    if (input.value > 0) {
      snacks.push({
        name: input.dataset.name,
        quantity: parseInt(input.value),
        price: parseInt(input.dataset.price),
      });
    }
  });
  return snacks;
}

function updateTotal() {
  const bookingSystem = document.querySelector('.app-container').__bookingSystem;
  if (!bookingSystem || !bookingSystem.selectedCourt) return;

  const courtFee = bookingSystem.selectedCourt.price * parseInt(document.getElementById('durationInput').value);
  let snacksTotal = 0;
  const snacksSummary = document.getElementById("snacksSummary");
  snacksSummary.innerHTML = "";

  document.querySelectorAll(".qty-input").forEach((input) => {
    const quantity = parseInt(input.value);
    const price = parseInt(input.dataset.price);
    if (quantity > 0) {
      const itemTotal = quantity * price;
      snacksTotal += itemTotal;
      snacksSummary.innerHTML += `
        <p>${input.dataset.name} x${quantity}: <span>Rp ${itemTotal.toLocaleString()}</span></p>
      `;
    }
  });

  const total = courtFee + snacksTotal;
  document.getElementById("totalAmount").textContent = `Rp ${total.toLocaleString()}`;
}

// Tambahkan fungsi global untuk handle cart
function showCartDetails() {
  const bookingSystem = document.querySelector('.app-container').__bookingSystem;
  bookingSystem.showCartDetails();
}

function removeCartItem(itemId) {
  const bookingSystem = document.querySelector('.app-container').__bookingSystem;
  bookingSystem.removeFromCart(itemId);
}

function proceedToCheckout() {
  const bookingSystem = document.querySelector('.app-container').__bookingSystem;
  bookingSystem.proceedToCheckout();
}

// Add at the bottom of the file
function updateCartDuration(itemId, change) {
  const bookingSystem = document.querySelector('.app-container').__bookingSystem;
  bookingSystem.updateCartItemDuration(itemId, change);
}

// Tambahkan fungsi global untuk handle payment
function proceedToPayment() {
  const bookingSystem = document.querySelector('.app-container').__bookingSystem;
  bookingSystem.proceedToPayment();
}
