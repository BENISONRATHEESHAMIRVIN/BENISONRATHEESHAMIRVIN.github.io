if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  
  if (Notification.permission === "granted") {
    const notification = new Notification("Hello world!", {
      body: "This is an example notification.",
      icon: "path/to/icon.png"
    });
  
    notification.onclick = function(event) {
      event.preventDefault();
      window.open("https://www.example.com");
    };
  }
  
  function showImage(src) {
    document.getElementById("preview-image").src = src;
  }

  function redirectToBooking() {
    window.location.href = "booking.html";
  }
  