import { computed, ComputedRef, ref } from 'vue';

type TIndexList = Array<{
  index: number;
  priority: number;
}>

type TUsePriority = {
  setPriorityIndexList: (newIndexList: TIndexList) => void;
  onReset: () => void;
  onNext: () => void;
  loadingIndex: ComputedRef<number>;
}

export const usePriority = (): TUsePriority => {
  const priorityCurrentIndex = ref(-1);
  const priorityIndexList = ref<TIndexList>([]);

  const setPriorityIndexList = (newIndexList: TIndexList): void => {
    priorityIndexList.value = newIndexList
      .slice()
      .sort((a, b) => a.priority - b.priority);
  };

  const loadingIndex = computed(() => {
    const currentPriorityItem =
      priorityIndexList.value[priorityCurrentIndex.value];
    if (!currentPriorityItem) return -1;

    return currentPriorityItem.index;
  });

  const onReset = () => {
    priorityCurrentIndex.value = 0;
  };

  const onNext = () => {
    const isLastItem =
      priorityCurrentIndex.value >= priorityIndexList.value.length - 1;
    if (isLastItem) return;

    priorityCurrentIndex.value += 1;
  };

  return {
    setPriorityIndexList,
    onReset,
    onNext,
    loadingIndex,
  }
};
