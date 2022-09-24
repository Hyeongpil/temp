import { onMounted, onUnmounted } from "vue";

export type ValueMap = {
  [key: string]: any;
};

interface IState {
  scrollTop: number;
  style: ValueMap;
}

const bodyScrollLockStates: Array<IState> = [];

export const useBodyScrollLock = () => {
  const lockBodyScroll = () => {
    const body = document.body;
    const { top, overflow, width, position } = body.style;
    const scrollTop =
      window.scrollY ||
      document.documentElement?.scrollTop ||
      body.scrollTop ||
      0;

    const state: IState = {
      scrollTop,
      style: { top, overflow, width, position },
    };

    bodyScrollLockStates.push(state);

    window.scrollTo(0, 0);

    body.style.top = `-${scrollTop}px`;
    body.style.overflow = "hidden";
    body.style.width = "100%";
    body.style.position = "fixed";
  };
  const initBodyScroll = () => {
    const state = bodyScrollLockStates.pop();

    if (state && bodyScrollLockStates.length === 0) {
      const { scrollTop, style = {} } = state;

      for (const [key, value] of Object.entries(style)) {
        const body = document.body.style as ValueMap;
        body[key] = value ?? "";
      }

      window.scrollTo(0, scrollTop || 0);
    }
  };

  const onMountBodyScrollLock = (shouldScrollLock: boolean) => {
    onMounted(() => {
      if (shouldScrollLock) {
        lockBodyScroll();
      }
    });
    onUnmounted(() => {
      if (shouldScrollLock) {
        initBodyScroll();
      }
    });
  };

  return {
    lockBodyScroll,
    initBodyScroll,
    onMountBodyScrollLock,
  };
};
