abstract class Command<T> {
  constructor(public readonly data: T) {}
}

export { Command };
