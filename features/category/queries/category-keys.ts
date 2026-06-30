export const categoryKeys = {
  all: ["categories"] as const,
  detail: (id: number) => [...categoryKeys.all, id] as const,
};
