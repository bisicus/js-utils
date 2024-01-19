/**
 * @see {@link https://stackoverflow.com/a/67655609}
 * @since 1.0.0
 */
type BuildArrayMinLength<T, N extends number, Current extends T[]> = Current['length'] extends N
  ? [...Current, ...T[]]
  : BuildArrayMinLength<T, N, [...Current, T]>;

/**
 * @since 1.0.0
 */
export type ArrayMinLength<T, N extends number> = BuildArrayMinLength<T, N, []>;

/**
 * @since 1.0.0
 */
export type NonEmptyArray<T> = ArrayMinLength<T, 1>;
