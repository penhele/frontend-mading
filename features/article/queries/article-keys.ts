export const articleKeys = {
  all: ["articles"] as const,
  detail: (id: string) => [...articleKeys.all, id] as const,
};
