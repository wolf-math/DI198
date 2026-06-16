function echo(message: string): void {
  console.log(message.toUpperCase());
}

// inferred 'void'
function echo1(message: string) {
  console.log(message.toUpperCase());
}
