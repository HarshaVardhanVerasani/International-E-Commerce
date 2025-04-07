export function mergeClasses(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }
  
  export function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }