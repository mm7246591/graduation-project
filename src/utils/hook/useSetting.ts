import { useSettingStoreState } from "@/stores/setting";
import { computed } from "vue";

export function useSettingState() {
  const settingStore = useSettingStoreState();
  const getSettingLoading = computed(() => settingStore.loading);
  const getSettingLoadingSec = computed(() => settingStore.loadingSec);
  return {
    getSettingLoading,
    getSettingLoadingSec,
  };
}
