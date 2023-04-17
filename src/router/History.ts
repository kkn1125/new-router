export default class History {
  store: {
    current: boolean;
    path: string;
  }[] = [];

  pushHistory() {
    Object.assign(
      this.store,
      this.store.map((h) => ({ ...h, current: false }))
    );
    this.store.push({
      path: location.hash,
      current: true,
    });
  }

  currentHistory() {
    return this.store.find((h) => h.current);
  }

  currentHistoryIndex() {
    return this.store.findIndex((h) => h.current);
  }

  forwardHistory() {
    const index = this.currentHistoryIndex();
    if (index + 1 > history.length - 1) {
      return false;
    } else {
      return this.store[index + 1];
    }
  }

  backwardHistory() {
    const index = this.currentHistoryIndex();
    if (index - 1 < 0) {
      return false;
    } else {
      return this.store[index - 1];
    }
  }
}
