// https://stackoverflow.com/a/73525885

const originalEmit = process.emit;

// @ts-expect-error
process.emit = (name, data, ...rest) => {
  if (
    name === "warning" &&
    data instanceof Error &&
    data.name === "ExperimentalWarning" &&
    data.message.includes("Single executable application")
  ) {
    return false;
  }

  return originalEmit.apply(process, [
    name,
    data,
    ...rest,
  ] as unknown as Parameters<typeof originalEmit>);
};
