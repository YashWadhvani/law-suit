document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const currentUrl = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
      link.classList.remove("hover-underline-animation");
    }
  });

  //Toggle Menu
  const toggleMenu = () => {
    const isMenuOpen = document
      .querySelector(".hamburger")
      .classList.toggle("open");
    const overlay = document.querySelector(".overlay");

    if (isMenuOpen) {
      gsap.to("#navLine1", { rotation: 45, y: 6, duration: 0.3 });
      gsap.to("#navLine2", { opacity: 0, duration: 0.3 });
      gsap.to("#navLine3", { rotation: -45, y: -6, duration: 0.3 });
      // gsap.to(".hamburger", { rotation: -90, x: -30, duration: 0.5, ease: "power4.easeIn" });
      gsap.fromTo(
        ".overlay",
        { right: "-100%" }, // from
        { right: "0%", ease: "expo.out" } // to
      );
      overlay.classList.add("active");
    } else {
      gsap.to("#navLine1", { rotation: 0, y: 0, duration: 0.3 });
      gsap.to("#navLine2", { opacity: 1, duration: 0.3 });
      gsap.to("#navLine3", { rotation: 0, y: 0, duration: 0.3 });
      // gsap.to(".hamburger", { rotation: 0, x: 0, duration: 0.3,  ease: "power4.easeOut" });
      gsap.fromTo(
        ".overlay",
        { right: "0%" }, // from
        { right: "-100%", ease: "expo.in" } // to
      );
      overlay.classList.remove("active");
    }
  };

  // Attach the toggleMenu function to the hamburger click event
  document.querySelector(".hamburger").addEventListener("click", toggleMenu);

  if (document.querySelector("#index2")) {
    //Hero Animations

    gsap.to(".head span", {
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 1.5,
    });

    gsap.from(".para, .icon-list, .button1", {
      scrollTrigger: ".para",
      duration: 1,
      opacity: 0,
      y: 20,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(".main-image-text", {
      scrollTrigger: ".main-image-text",
      duration: 1,
      opacity: 0,
      x: -50,
      delay: 1,
      ease: "power2.out",
    });

    //Numbers Animations

    gsap.from(".number > .col-sm-4:nth-of-type(1)", {
      scrollTrigger: ".second",
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(".number > .col-sm-4:nth-of-type(2)", {
      scrollTrigger: ".second",
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: 0.4,
      ease: "power2.out",
    });

    gsap.from(".number > .col-sm-4:nth-of-type(3)", {
      scrollTrigger: ".second",
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: 0.6,
      ease: "power2.out",
    });

    // Section3 Animations

    gsap.to(".section3 .col-sm-8 h2 span", {
      scrollTrigger: ".section3",
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 1.5,
    });

    // Section five Animations

    gsap.to(".five .section5 h1 span", {
      scrollTrigger: ".five",
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 1.5,
    });

    //Section seven Animations

    gsap.to(".lawsuit-feature span", {
      scrollTrigger: ".five",
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 1.5,
    });

    gsap.from(".column > .col-sm-4, .column-1 > .col-sm-4", {
      scrollTrigger: ".seven",
      duration: 1,
      opacity: 0,
      y: 20,
      delay: 1,
      ease: "power2.out",
    });

    // Case Section Animations

    gsap.to(".case .latest-case span", {
      scrollTrigger: ".case",
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 1.5,
    });

    gsap.from(".case .eight-text", {
      scrollTrigger: ".case",
      duration: 2,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      ".date-desc",
      { opacity: 0, y: -20 },
      {
        scrollTrigger: ".case",
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 2,
      }
    );
  }

  if (document.querySelector("#about")) {
    // About Us Animations

    gsap.to(".aboutTxt", {
      y: "0px",
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      duration: 2,
    });

    gsap.to(".CaseTxt", {
      scrollTrigger: ".CaseTxt",
      y: "0px",
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      duration: 2,
      // delay: 2,
    });

    if (window.innerWidth > 767) {
      gsap.from(".mission", {
        scrollTrigger: ".mission",
        duration: 2,
        opacity: 0,
        x: -50,
        ease: "power2.out",
      });

      gsap.to(".vision", {
        scrollTrigger: ".vision",
        duration: 2,
        opacity: 1,
        x: -50,
        ease: "power2.out",
      });
    }
    gsap.to(".about-section-3 h1", {
      scrollTrigger: ".about-section-3",
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
      duration: 1.5,
    });
  }

  if (document.querySelector("#pricing")) {
    //Pricing Animations
    gsap.to(".PriceTxt", {
      y: "0px",
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      duration: 2,
    });

    gsap.to(".RatesTxt", {
      y: "0px",
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      duration: 2,
      delay: 0.5,
    });
  }

  if (document.querySelector("#FAQ")) {
    //FAQ Animations
    gsap.to(".FAQTxt", {
      y: "0px",
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      duration: 2,
    });

    gsap.fromTo(
      ".accordion-item",
      { opacity: 0, y: -20 },
      {
        scrollTrigger: ".accordion",
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1,
      }
    );
  }

  if (document.querySelector("#contact")) {
    gsap.to(".ContactTxt", {
      y: "0px",
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out",
      duration: 2,
    });
  }
});
