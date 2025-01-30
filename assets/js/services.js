// Define your services
const services = {
    Physiotherapy: {
      title: "Physiotherapy",
      subheading: "Physiotherapy",
      description: [
        "Physiotherapy at Gautam Hospital And Trauma Center in Shahjahanpur focuses on helping patients improve mobility, reduce pain, and recover from injuries.",
        "Our expert physiotherapists use advanced techniques and personalized care to ensure faster recovery and better quality of life",
        "We also provide rehabilitation services for post-surgical recovery."
      ],
      imgCircle: "assets/media/services/service-4.png", // Icon image
      detailImg: "assets/media/services/physiotherapy-detail.webp", // Main image
      advantages: [
        "Reduces pain and improves movement.",
        "Helps in faster post-surgery recovery.",
        "Strengthens muscles and joints effectively.",
        "Prevents long-term physical disabilities.",
        "Boosts overall physical health and well-being."
      ],
      healthPlans: [
        "Our post-surgery rehabilitation plans are designed to help patients regain strength, restore mobility, and achieve faster recovery after surgical procedures.",
        "For individuals dealing with chronic pain, our regular physiotherapy sessions aim to reduce discomfort, improve joint movement, and enable them to carry out daily activities with ease.",
      ]
    },
    SurgicalServices: {
      title: "Surgical Services",
      subheading: "Surgical Services",
      description: [
        "We provide top-quality surgical services with state-of-the-art equipment.",
        "Our skilled surgeons specialize in both minor and major surgeries.",
        "Safety and post-operative care are our highest priorities."
      ],
      imgCircle: "assets/media/services/surgical-icon.png",
      detailImg: "assets/media/services/surgical-detail.png",
      advantages: [
        "Expert surgical team available 24/7.",
        "Minimally invasive surgical options.",
        "State-of-the-art operating rooms.",
        "Comprehensive post-operative support."
      ],
      healthPlans: [
        "Pre-surgery consultations and planning.",
        "Dedicated post-surgical care services."
      ]
    },
    // Add other services similarly
  };
  
  // Get query parameter from URL
  const params = new URLSearchParams(window.location.search);
  const serviceKey = params.get("service"); // e.g., "Physiotherapy"
  
  if (services[serviceKey]) {
    const service = services[serviceKey];
  
    // Populate the content dynamically
    document.querySelector(".service-title").textContent = service.title;
    document.querySelector(".service-subheading").textContent = service.subheading;
    document.getElementById("service-img-circle").src = service.imgCircle;
    document.getElementById("service-img-circle").alt = service.title;
    document.getElementById("service-detail-img").src = service.detailImg;
    document.getElementById("service-detail-img").alt = `${service.title} Details`;
  
    // Update descriptions
    document.getElementById("service-description-1").textContent = service.description[0];
    document.getElementById("service-description-2").textContent = service.description[1];
  
    // Update advantages
    const advantagesList = document.getElementById("advantages-list");
    advantagesList.innerHTML = ""; // Clear existing content
    service.advantages.forEach((adv) => {
      const div = document.createElement("div");
      div.className = "advantage_text mb-16";
      div.innerHTML = `<i class="fal fa-check"></i><p class="gray">${adv}</p>`;
      advantagesList.appendChild(div);
    });
  
    // Update health plans
    document.getElementById("health-plan-1").textContent = service.healthPlans[0];
    document.getElementById("health-plan-2").textContent = service.healthPlans[1];
  } else {
    // Handle invalid service or redirect
    document.querySelector(".service-title").textContent = "Service Not Found";
    document.getElementById("service-description-1").textContent =
      "The service you are looking for does not exist. Please select a valid service.";
    document.getElementById("service-img-circle").src = "assets/media/services/default-icon.png";
    document.getElementById("service-detail-img").src = "assets/media/services/default-detail.png";
  }