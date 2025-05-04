import { useRouter } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    const router = useRouter();

    router.afterEach((to, from) => {
      if (to.hash) {
        const scrollToHash = () => {
          const targetElement = document.querySelector(to.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        };

        // Coming from /showcase? Delay 1s before trying to scroll
        if (from.path === "/showcase") {
          setTimeout(() => {
            scrollToHash();
          }, 100);
        } else {
          // Otherwise scroll after a short delay to ensure element is in DOM
          setTimeout(() => {
            scrollToHash();
          }, 100);
        }
      } else {
        // No hash — just scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
});
