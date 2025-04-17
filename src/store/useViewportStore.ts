import { create } from "zustand";

type ViewportType = "mobile" | "tablet" | "desktop";

interface ViewportStore {
  viewport: ViewportType;
  setViewport: (viewport: ViewportType) => void;
};

const useViewportStore = create<ViewportStore>((set) => ({
  viewport: "mobile",
  setViewport: (viewport: ViewportType) => set({ viewport })
}));

export default useViewportStore;