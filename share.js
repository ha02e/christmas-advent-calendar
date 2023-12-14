document.getElementById("shareButton").addEventListener("click", async () => {
  try {
    if (!navigator.share) {
      alert("Web Share API is not available on your browser.");
      return;
    }

    const shareData = {
      title: "Web Share Example",
      text: "Check out this web share example!",
      url: window.location.href,
    };

    await navigator.share(shareData);
    console.log("Data was shared successfully");
  } catch (err) {
    console.error("Share failed:", err.message);
  }
});
