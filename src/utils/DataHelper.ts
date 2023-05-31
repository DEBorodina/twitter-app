export class DataHelper {
  public static getYears() {
    const years = new Array(new Date().getFullYear() - 1900)
      .fill(0)
      .map((_, i) => `${new Date().getFullYear() - i}`);
    return years;
  }

  public static getDays() {
    const days = new Array(31).fill(0).map((_, i) => `${i + 1}`);
    return days;
  }
}
