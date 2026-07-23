function pyramid(char, count, inverted) {
  const rows = [];

  for (let i = 0; i < count; i++) {
    // i represents the distance from the vertex row
    const spaces = ' '.repeat(count - 1 - i);
    const pattern = char.repeat(2 * i + 1);
    rows.push(spaces + pattern);
  }

  // Reverse the order of rows if the vertex should face downwards
  if (inverted) {
    rows.reverse();
  }

  // Return the pyramid starting and ending with a newline character
  return `\n${rows.join('\n')}\n`;
}
