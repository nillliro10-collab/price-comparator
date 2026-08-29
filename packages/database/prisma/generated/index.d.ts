
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model SyncRun
 * 
 */
export type SyncRun = $Result.DefaultSelection<Prisma.$SyncRunPayload>
/**
 * Model SyncError
 * 
 */
export type SyncError = $Result.DefaultSelection<Prisma.$SyncErrorPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>
/**
 * Model RawOffer
 * 
 */
export type RawOffer = $Result.DefaultSelection<Prisma.$RawOfferPayload>
/**
 * Model AnalyticsEvent
 * 
 */
export type AnalyticsEvent = $Result.DefaultSelection<Prisma.$AnalyticsEventPayload>
/**
 * Model MatchingDecision
 * 
 */
export type MatchingDecision = $Result.DefaultSelection<Prisma.$MatchingDecisionPayload>
/**
 * Model AffiliateConversion
 * 
 */
export type AffiliateConversion = $Result.DefaultSelection<Prisma.$AffiliateConversionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brand.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brand.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.syncRun`: Exposes CRUD operations for the **SyncRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncRuns
    * const syncRuns = await prisma.syncRun.findMany()
    * ```
    */
  get syncRun(): Prisma.SyncRunDelegate<ExtArgs>;

  /**
   * `prisma.syncError`: Exposes CRUD operations for the **SyncError** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncErrors
    * const syncErrors = await prisma.syncError.findMany()
    * ```
    */
  get syncError(): Prisma.SyncErrorDelegate<ExtArgs>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs>;

  /**
   * `prisma.rawOffer`: Exposes CRUD operations for the **RawOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawOffers
    * const rawOffers = await prisma.rawOffer.findMany()
    * ```
    */
  get rawOffer(): Prisma.RawOfferDelegate<ExtArgs>;

  /**
   * `prisma.analyticsEvent`: Exposes CRUD operations for the **AnalyticsEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsEvents
    * const analyticsEvents = await prisma.analyticsEvent.findMany()
    * ```
    */
  get analyticsEvent(): Prisma.AnalyticsEventDelegate<ExtArgs>;

  /**
   * `prisma.matchingDecision`: Exposes CRUD operations for the **MatchingDecision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchingDecisions
    * const matchingDecisions = await prisma.matchingDecision.findMany()
    * ```
    */
  get matchingDecision(): Prisma.MatchingDecisionDelegate<ExtArgs>;

  /**
   * `prisma.affiliateConversion`: Exposes CRUD operations for the **AffiliateConversion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AffiliateConversions
    * const affiliateConversions = await prisma.affiliateConversion.findMany()
    * ```
    */
  get affiliateConversion(): Prisma.AffiliateConversionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Brand: 'Brand',
    Category: 'Category',
    Product: 'Product',
    Variant: 'Variant',
    Store: 'Store',
    SyncRun: 'SyncRun',
    SyncError: 'SyncError',
    Offer: 'Offer',
    PriceHistory: 'PriceHistory',
    RawOffer: 'RawOffer',
    AnalyticsEvent: 'AnalyticsEvent',
    MatchingDecision: 'MatchingDecision',
    AffiliateConversion: 'AffiliateConversion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "brand" | "category" | "product" | "variant" | "store" | "syncRun" | "syncError" | "offer" | "priceHistory" | "rawOffer" | "analyticsEvent" | "matchingDecision" | "affiliateConversion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      SyncRun: {
        payload: Prisma.$SyncRunPayload<ExtArgs>
        fields: Prisma.SyncRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          findFirst: {
            args: Prisma.SyncRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          findMany: {
            args: Prisma.SyncRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          create: {
            args: Prisma.SyncRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          createMany: {
            args: Prisma.SyncRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          delete: {
            args: Prisma.SyncRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          update: {
            args: Prisma.SyncRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          deleteMany: {
            args: Prisma.SyncRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          aggregate: {
            args: Prisma.SyncRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncRun>
          }
          groupBy: {
            args: Prisma.SyncRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncRunCountArgs<ExtArgs>
            result: $Utils.Optional<SyncRunCountAggregateOutputType> | number
          }
        }
      }
      SyncError: {
        payload: Prisma.$SyncErrorPayload<ExtArgs>
        fields: Prisma.SyncErrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncErrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncErrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>
          }
          findFirst: {
            args: Prisma.SyncErrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncErrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>
          }
          findMany: {
            args: Prisma.SyncErrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>[]
          }
          create: {
            args: Prisma.SyncErrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>
          }
          createMany: {
            args: Prisma.SyncErrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncErrorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>[]
          }
          delete: {
            args: Prisma.SyncErrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>
          }
          update: {
            args: Prisma.SyncErrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>
          }
          deleteMany: {
            args: Prisma.SyncErrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncErrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncErrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncErrorPayload>
          }
          aggregate: {
            args: Prisma.SyncErrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncError>
          }
          groupBy: {
            args: Prisma.SyncErrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncErrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncErrorCountArgs<ExtArgs>
            result: $Utils.Optional<SyncErrorCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
          }
        }
      }
      RawOffer: {
        payload: Prisma.$RawOfferPayload<ExtArgs>
        fields: Prisma.RawOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>
          }
          findFirst: {
            args: Prisma.RawOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>
          }
          findMany: {
            args: Prisma.RawOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>[]
          }
          create: {
            args: Prisma.RawOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>
          }
          createMany: {
            args: Prisma.RawOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>[]
          }
          delete: {
            args: Prisma.RawOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>
          }
          update: {
            args: Prisma.RawOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>
          }
          deleteMany: {
            args: Prisma.RawOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RawOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawOfferPayload>
          }
          aggregate: {
            args: Prisma.RawOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawOffer>
          }
          groupBy: {
            args: Prisma.RawOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawOfferCountArgs<ExtArgs>
            result: $Utils.Optional<RawOfferCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsEvent: {
        payload: Prisma.$AnalyticsEventPayload<ExtArgs>
        fields: Prisma.AnalyticsEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findMany: {
            args: Prisma.AnalyticsEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          create: {
            args: Prisma.AnalyticsEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          createMany: {
            args: Prisma.AnalyticsEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          update: {
            args: Prisma.AnalyticsEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyticsEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsEvent>
          }
          groupBy: {
            args: Prisma.AnalyticsEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventCountAggregateOutputType> | number
          }
        }
      }
      MatchingDecision: {
        payload: Prisma.$MatchingDecisionPayload<ExtArgs>
        fields: Prisma.MatchingDecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchingDecisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchingDecisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>
          }
          findFirst: {
            args: Prisma.MatchingDecisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchingDecisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>
          }
          findMany: {
            args: Prisma.MatchingDecisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>[]
          }
          create: {
            args: Prisma.MatchingDecisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>
          }
          createMany: {
            args: Prisma.MatchingDecisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchingDecisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>[]
          }
          delete: {
            args: Prisma.MatchingDecisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>
          }
          update: {
            args: Prisma.MatchingDecisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>
          }
          deleteMany: {
            args: Prisma.MatchingDecisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchingDecisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchingDecisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingDecisionPayload>
          }
          aggregate: {
            args: Prisma.MatchingDecisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchingDecision>
          }
          groupBy: {
            args: Prisma.MatchingDecisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchingDecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchingDecisionCountArgs<ExtArgs>
            result: $Utils.Optional<MatchingDecisionCountAggregateOutputType> | number
          }
        }
      }
      AffiliateConversion: {
        payload: Prisma.$AffiliateConversionPayload<ExtArgs>
        fields: Prisma.AffiliateConversionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliateConversionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliateConversionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>
          }
          findFirst: {
            args: Prisma.AffiliateConversionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliateConversionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>
          }
          findMany: {
            args: Prisma.AffiliateConversionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>[]
          }
          create: {
            args: Prisma.AffiliateConversionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>
          }
          createMany: {
            args: Prisma.AffiliateConversionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AffiliateConversionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>[]
          }
          delete: {
            args: Prisma.AffiliateConversionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>
          }
          update: {
            args: Prisma.AffiliateConversionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>
          }
          deleteMany: {
            args: Prisma.AffiliateConversionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliateConversionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AffiliateConversionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateConversionPayload>
          }
          aggregate: {
            args: Prisma.AffiliateConversionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAffiliateConversion>
          }
          groupBy: {
            args: Prisma.AffiliateConversionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AffiliateConversionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AffiliateConversionCountArgs<ExtArgs>
            result: $Utils.Optional<AffiliateConversionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }


  /**
   * Count Type VariantCountOutputType
   */

  export type VariantCountOutputType = {
    offers: number
  }

  export type VariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | VariantCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantCountOutputType
     */
    select?: VariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    offers: number
    rawOffers: number
    syncErrors: number
    syncRuns: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | StoreCountOutputTypeCountOffersArgs
    rawOffers?: boolean | StoreCountOutputTypeCountRawOffersArgs
    syncErrors?: boolean | StoreCountOutputTypeCountSyncErrorsArgs
    syncRuns?: boolean | StoreCountOutputTypeCountSyncRunsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountRawOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawOfferWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountSyncErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncErrorWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountSyncRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncRunWhereInput
  }


  /**
   * Count Type SyncRunCountOutputType
   */

  export type SyncRunCountOutputType = {
    syncErrors: number
  }

  export type SyncRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syncErrors?: boolean | SyncRunCountOutputTypeCountSyncErrorsArgs
  }

  // Custom InputTypes
  /**
   * SyncRunCountOutputType without action
   */
  export type SyncRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRunCountOutputType
     */
    select?: SyncRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SyncRunCountOutputType without action
   */
  export type SyncRunCountOutputTypeCountSyncErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncErrorWhereInput
  }


  /**
   * Count Type OfferCountOutputType
   */

  export type OfferCountOutputType = {
    priceHistory: number
  }

  export type OfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceHistory?: boolean | OfferCountOutputTypeCountPriceHistoryArgs
  }

  // Custom InputTypes
  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCountOutputType
     */
    select?: OfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */ 
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly slug: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    brandId: string | null
    categoryId: string | null
    name: string | null
    model: string | null
    slug: string | null
    description: string | null
    gender: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    brandId: string | null
    categoryId: string | null
    name: string | null
    model: string | null
    slug: string | null
    description: string | null
    gender: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    brandId: number
    categoryId: number
    name: number
    model: number
    slug: number
    description: number
    gender: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    brandId?: true
    categoryId?: true
    name?: true
    model?: true
    slug?: true
    description?: true
    gender?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    brandId?: true
    categoryId?: true
    name?: true
    model?: true
    slug?: true
    description?: true
    gender?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    brandId?: true
    categoryId?: true
    name?: true
    model?: true
    slug?: true
    description?: true
    gender?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    brandId: string
    categoryId: string | null
    name: string
    model: string
    slug: string
    description: string | null
    gender: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    categoryId?: boolean
    name?: boolean
    model?: boolean
    slug?: boolean
    description?: boolean
    gender?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    categoryId?: boolean
    name?: boolean
    model?: boolean
    slug?: boolean
    description?: boolean
    gender?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    brandId?: boolean
    categoryId?: boolean
    name?: boolean
    model?: boolean
    slug?: boolean
    description?: boolean
    gender?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      brand: Prisma.$BrandPayload<ExtArgs>
      variants: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandId: string
      categoryId: string | null
      name: string
      model: string
      slug: string
      description: string | null
      gender: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly brandId: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly model: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly gender: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantMinAggregateOutputType = {
    id: string | null
    productId: string | null
    colorRaw: string | null
    colorNormalized: string | null
    sizeRaw: string | null
    sizeValue: string | null
    sizeSystem: string | null
    sku: string | null
    gtin: string | null
    mpn: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    colorRaw: string | null
    colorNormalized: string | null
    sizeRaw: string | null
    sizeValue: string | null
    sizeSystem: string | null
    sku: string | null
    gtin: string | null
    mpn: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    productId: number
    colorRaw: number
    colorNormalized: number
    sizeRaw: number
    sizeValue: number
    sizeSystem: number
    sku: number
    gtin: number
    mpn: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariantMinAggregateInputType = {
    id?: true
    productId?: true
    colorRaw?: true
    colorNormalized?: true
    sizeRaw?: true
    sizeValue?: true
    sizeSystem?: true
    sku?: true
    gtin?: true
    mpn?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    productId?: true
    colorRaw?: true
    colorNormalized?: true
    sizeRaw?: true
    sizeValue?: true
    sizeSystem?: true
    sku?: true
    gtin?: true
    mpn?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    productId?: true
    colorRaw?: true
    colorNormalized?: true
    sizeRaw?: true
    sizeValue?: true
    sizeSystem?: true
    sku?: true
    gtin?: true
    mpn?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: string
    productId: string
    colorRaw: string | null
    colorNormalized: string | null
    sizeRaw: string | null
    sizeValue: string | null
    sizeSystem: string | null
    sku: string | null
    gtin: string | null
    mpn: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: VariantCountAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    colorRaw?: boolean
    colorNormalized?: boolean
    sizeRaw?: boolean
    sizeValue?: boolean
    sizeSystem?: boolean
    sku?: boolean
    gtin?: boolean
    mpn?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    offers?: boolean | Variant$offersArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    colorRaw?: boolean
    colorNormalized?: boolean
    sizeRaw?: boolean
    sizeValue?: boolean
    sizeSystem?: boolean
    sku?: boolean
    gtin?: boolean
    mpn?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    productId?: boolean
    colorRaw?: boolean
    colorNormalized?: boolean
    sizeRaw?: boolean
    sizeValue?: boolean
    sizeSystem?: boolean
    sku?: boolean
    gtin?: boolean
    mpn?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | Variant$offersArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      colorRaw: string | null
      colorNormalized: string | null
      sizeRaw: string | null
      sizeValue: string | null
      sizeSystem: string | null
      sku: string | null
      gtin: string | null
      mpn: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantFindUniqueArgs>(args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantFindFirstArgs>(args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantFindManyArgs>(args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends VariantCreateArgs>(args: SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Variants.
     * @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantCreateManyArgs>(args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends VariantDeleteArgs>(args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantUpdateArgs>(args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantDeleteManyArgs>(args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantUpdateManyArgs>(args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends VariantUpsertArgs>(args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends Variant$offersArgs<ExtArgs> = {}>(args?: Subset<T, Variant$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany"> | Null>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variant model
   */ 
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'String'>
    readonly productId: FieldRef<"Variant", 'String'>
    readonly colorRaw: FieldRef<"Variant", 'String'>
    readonly colorNormalized: FieldRef<"Variant", 'String'>
    readonly sizeRaw: FieldRef<"Variant", 'String'>
    readonly sizeValue: FieldRef<"Variant", 'String'>
    readonly sizeSystem: FieldRef<"Variant", 'String'>
    readonly sku: FieldRef<"Variant", 'String'>
    readonly gtin: FieldRef<"Variant", 'String'>
    readonly mpn: FieldRef<"Variant", 'String'>
    readonly imageUrl: FieldRef<"Variant", 'String'>
    readonly createdAt: FieldRef<"Variant", 'DateTime'>
    readonly updatedAt: FieldRef<"Variant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }

  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
  }

  /**
   * Variant createManyAndReturn
   */
  export type VariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
  }

  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }

  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
  }

  /**
   * Variant.offers
   */
  export type Variant$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    shopScore: number | null
    syncInterval: number | null
    consecutiveFailures: number | null
    expirationDays: number | null
  }

  export type StoreSumAggregateOutputType = {
    shopScore: number | null
    syncInterval: number | null
    consecutiveFailures: number | null
    expirationDays: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    websiteUrl: string | null
    shopScore: number | null
    logoUrl: string | null
    isAffiliate: boolean | null
    isActive: boolean | null
    syncEnabled: boolean | null
    syncInterval: number | null
    consecutiveFailures: number | null
    expirationDays: number | null
    integrationType: string | null
    affiliateNetwork: string | null
    programId: string | null
    trackingEnabled: boolean | null
    deeplinkTemplate: string | null
    isDemo: boolean | null
    lastSuccessfulSyncAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    websiteUrl: string | null
    shopScore: number | null
    logoUrl: string | null
    isAffiliate: boolean | null
    isActive: boolean | null
    syncEnabled: boolean | null
    syncInterval: number | null
    consecutiveFailures: number | null
    expirationDays: number | null
    integrationType: string | null
    affiliateNetwork: string | null
    programId: string | null
    trackingEnabled: boolean | null
    deeplinkTemplate: string | null
    isDemo: boolean | null
    lastSuccessfulSyncAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    websiteUrl: number
    shopScore: number
    logoUrl: number
    isAffiliate: number
    isActive: number
    syncEnabled: number
    syncInterval: number
    consecutiveFailures: number
    expirationDays: number
    integrationType: number
    affiliateNetwork: number
    programId: number
    trackingEnabled: number
    deeplinkTemplate: number
    isDemo: number
    lastSuccessfulSyncAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    shopScore?: true
    syncInterval?: true
    consecutiveFailures?: true
    expirationDays?: true
  }

  export type StoreSumAggregateInputType = {
    shopScore?: true
    syncInterval?: true
    consecutiveFailures?: true
    expirationDays?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    websiteUrl?: true
    shopScore?: true
    logoUrl?: true
    isAffiliate?: true
    isActive?: true
    syncEnabled?: true
    syncInterval?: true
    consecutiveFailures?: true
    expirationDays?: true
    integrationType?: true
    affiliateNetwork?: true
    programId?: true
    trackingEnabled?: true
    deeplinkTemplate?: true
    isDemo?: true
    lastSuccessfulSyncAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    websiteUrl?: true
    shopScore?: true
    logoUrl?: true
    isAffiliate?: true
    isActive?: true
    syncEnabled?: true
    syncInterval?: true
    consecutiveFailures?: true
    expirationDays?: true
    integrationType?: true
    affiliateNetwork?: true
    programId?: true
    trackingEnabled?: true
    deeplinkTemplate?: true
    isDemo?: true
    lastSuccessfulSyncAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    websiteUrl?: true
    shopScore?: true
    logoUrl?: true
    isAffiliate?: true
    isActive?: true
    syncEnabled?: true
    syncInterval?: true
    consecutiveFailures?: true
    expirationDays?: true
    integrationType?: true
    affiliateNetwork?: true
    programId?: true
    trackingEnabled?: true
    deeplinkTemplate?: true
    isDemo?: true
    lastSuccessfulSyncAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    slug: string
    websiteUrl: string
    shopScore: number
    logoUrl: string | null
    isAffiliate: boolean
    isActive: boolean
    syncEnabled: boolean
    syncInterval: number
    consecutiveFailures: number
    expirationDays: number
    integrationType: string
    affiliateNetwork: string | null
    programId: string | null
    trackingEnabled: boolean
    deeplinkTemplate: string | null
    isDemo: boolean
    lastSuccessfulSyncAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    websiteUrl?: boolean
    shopScore?: boolean
    logoUrl?: boolean
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: boolean
    consecutiveFailures?: boolean
    expirationDays?: boolean
    integrationType?: boolean
    affiliateNetwork?: boolean
    programId?: boolean
    trackingEnabled?: boolean
    deeplinkTemplate?: boolean
    isDemo?: boolean
    lastSuccessfulSyncAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    offers?: boolean | Store$offersArgs<ExtArgs>
    rawOffers?: boolean | Store$rawOffersArgs<ExtArgs>
    syncErrors?: boolean | Store$syncErrorsArgs<ExtArgs>
    syncRuns?: boolean | Store$syncRunsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    websiteUrl?: boolean
    shopScore?: boolean
    logoUrl?: boolean
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: boolean
    consecutiveFailures?: boolean
    expirationDays?: boolean
    integrationType?: boolean
    affiliateNetwork?: boolean
    programId?: boolean
    trackingEnabled?: boolean
    deeplinkTemplate?: boolean
    isDemo?: boolean
    lastSuccessfulSyncAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    websiteUrl?: boolean
    shopScore?: boolean
    logoUrl?: boolean
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: boolean
    consecutiveFailures?: boolean
    expirationDays?: boolean
    integrationType?: boolean
    affiliateNetwork?: boolean
    programId?: boolean
    trackingEnabled?: boolean
    deeplinkTemplate?: boolean
    isDemo?: boolean
    lastSuccessfulSyncAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | Store$offersArgs<ExtArgs>
    rawOffers?: boolean | Store$rawOffersArgs<ExtArgs>
    syncErrors?: boolean | Store$syncErrorsArgs<ExtArgs>
    syncRuns?: boolean | Store$syncRunsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
      rawOffers: Prisma.$RawOfferPayload<ExtArgs>[]
      syncErrors: Prisma.$SyncErrorPayload<ExtArgs>[]
      syncRuns: Prisma.$SyncRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      websiteUrl: string
      shopScore: number
      logoUrl: string | null
      isAffiliate: boolean
      isActive: boolean
      syncEnabled: boolean
      syncInterval: number
      consecutiveFailures: number
      expirationDays: number
      integrationType: string
      affiliateNetwork: string | null
      programId: string | null
      trackingEnabled: boolean
      deeplinkTemplate: string | null
      isDemo: boolean
      lastSuccessfulSyncAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends Store$offersArgs<ExtArgs> = {}>(args?: Subset<T, Store$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany"> | Null>
    rawOffers<T extends Store$rawOffersArgs<ExtArgs> = {}>(args?: Subset<T, Store$rawOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "findMany"> | Null>
    syncErrors<T extends Store$syncErrorsArgs<ExtArgs> = {}>(args?: Subset<T, Store$syncErrorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findMany"> | Null>
    syncRuns<T extends Store$syncRunsArgs<ExtArgs> = {}>(args?: Subset<T, Store$syncRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly slug: FieldRef<"Store", 'String'>
    readonly websiteUrl: FieldRef<"Store", 'String'>
    readonly shopScore: FieldRef<"Store", 'Int'>
    readonly logoUrl: FieldRef<"Store", 'String'>
    readonly isAffiliate: FieldRef<"Store", 'Boolean'>
    readonly isActive: FieldRef<"Store", 'Boolean'>
    readonly syncEnabled: FieldRef<"Store", 'Boolean'>
    readonly syncInterval: FieldRef<"Store", 'Int'>
    readonly consecutiveFailures: FieldRef<"Store", 'Int'>
    readonly expirationDays: FieldRef<"Store", 'Int'>
    readonly integrationType: FieldRef<"Store", 'String'>
    readonly affiliateNetwork: FieldRef<"Store", 'String'>
    readonly programId: FieldRef<"Store", 'String'>
    readonly trackingEnabled: FieldRef<"Store", 'Boolean'>
    readonly deeplinkTemplate: FieldRef<"Store", 'String'>
    readonly isDemo: FieldRef<"Store", 'Boolean'>
    readonly lastSuccessfulSyncAt: FieldRef<"Store", 'DateTime'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store.offers
   */
  export type Store$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Store.rawOffers
   */
  export type Store$rawOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    where?: RawOfferWhereInput
    orderBy?: RawOfferOrderByWithRelationInput | RawOfferOrderByWithRelationInput[]
    cursor?: RawOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawOfferScalarFieldEnum | RawOfferScalarFieldEnum[]
  }

  /**
   * Store.syncErrors
   */
  export type Store$syncErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    where?: SyncErrorWhereInput
    orderBy?: SyncErrorOrderByWithRelationInput | SyncErrorOrderByWithRelationInput[]
    cursor?: SyncErrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncErrorScalarFieldEnum | SyncErrorScalarFieldEnum[]
  }

  /**
   * Store.syncRuns
   */
  export type Store$syncRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    where?: SyncRunWhereInput
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    cursor?: SyncRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model SyncRun
   */

  export type AggregateSyncRun = {
    _count: SyncRunCountAggregateOutputType | null
    _avg: SyncRunAvgAggregateOutputType | null
    _sum: SyncRunSumAggregateOutputType | null
    _min: SyncRunMinAggregateOutputType | null
    _max: SyncRunMaxAggregateOutputType | null
  }

  export type SyncRunAvgAggregateOutputType = {
    itemsReceived: number | null
    itemsProcessed: number | null
    itemsCreated: number | null
    itemsUpdated: number | null
    itemsFailed: number | null
    errorCount: number | null
    missingSkuCount: number | null
    invalidPriceCount: number | null
    outOfStockCount: number | null
    durationMs: number | null
  }

  export type SyncRunSumAggregateOutputType = {
    itemsReceived: number | null
    itemsProcessed: number | null
    itemsCreated: number | null
    itemsUpdated: number | null
    itemsFailed: number | null
    errorCount: number | null
    missingSkuCount: number | null
    invalidPriceCount: number | null
    outOfStockCount: number | null
    durationMs: number | null
  }

  export type SyncRunMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    sourceType: string | null
    status: string | null
    itemsReceived: number | null
    itemsProcessed: number | null
    itemsCreated: number | null
    itemsUpdated: number | null
    itemsFailed: number | null
    errorCount: number | null
    missingSkuCount: number | null
    invalidPriceCount: number | null
    outOfStockCount: number | null
    durationMs: number | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type SyncRunMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    sourceType: string | null
    status: string | null
    itemsReceived: number | null
    itemsProcessed: number | null
    itemsCreated: number | null
    itemsUpdated: number | null
    itemsFailed: number | null
    errorCount: number | null
    missingSkuCount: number | null
    invalidPriceCount: number | null
    outOfStockCount: number | null
    durationMs: number | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type SyncRunCountAggregateOutputType = {
    id: number
    storeId: number
    sourceType: number
    status: number
    itemsReceived: number
    itemsProcessed: number
    itemsCreated: number
    itemsUpdated: number
    itemsFailed: number
    errorCount: number
    missingSkuCount: number
    invalidPriceCount: number
    outOfStockCount: number
    durationMs: number
    startedAt: number
    finishedAt: number
    _all: number
  }


  export type SyncRunAvgAggregateInputType = {
    itemsReceived?: true
    itemsProcessed?: true
    itemsCreated?: true
    itemsUpdated?: true
    itemsFailed?: true
    errorCount?: true
    missingSkuCount?: true
    invalidPriceCount?: true
    outOfStockCount?: true
    durationMs?: true
  }

  export type SyncRunSumAggregateInputType = {
    itemsReceived?: true
    itemsProcessed?: true
    itemsCreated?: true
    itemsUpdated?: true
    itemsFailed?: true
    errorCount?: true
    missingSkuCount?: true
    invalidPriceCount?: true
    outOfStockCount?: true
    durationMs?: true
  }

  export type SyncRunMinAggregateInputType = {
    id?: true
    storeId?: true
    sourceType?: true
    status?: true
    itemsReceived?: true
    itemsProcessed?: true
    itemsCreated?: true
    itemsUpdated?: true
    itemsFailed?: true
    errorCount?: true
    missingSkuCount?: true
    invalidPriceCount?: true
    outOfStockCount?: true
    durationMs?: true
    startedAt?: true
    finishedAt?: true
  }

  export type SyncRunMaxAggregateInputType = {
    id?: true
    storeId?: true
    sourceType?: true
    status?: true
    itemsReceived?: true
    itemsProcessed?: true
    itemsCreated?: true
    itemsUpdated?: true
    itemsFailed?: true
    errorCount?: true
    missingSkuCount?: true
    invalidPriceCount?: true
    outOfStockCount?: true
    durationMs?: true
    startedAt?: true
    finishedAt?: true
  }

  export type SyncRunCountAggregateInputType = {
    id?: true
    storeId?: true
    sourceType?: true
    status?: true
    itemsReceived?: true
    itemsProcessed?: true
    itemsCreated?: true
    itemsUpdated?: true
    itemsFailed?: true
    errorCount?: true
    missingSkuCount?: true
    invalidPriceCount?: true
    outOfStockCount?: true
    durationMs?: true
    startedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type SyncRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncRun to aggregate.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncRuns
    **/
    _count?: true | SyncRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncRunMaxAggregateInputType
  }

  export type GetSyncRunAggregateType<T extends SyncRunAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncRun[P]>
      : GetScalarType<T[P], AggregateSyncRun[P]>
  }




  export type SyncRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncRunWhereInput
    orderBy?: SyncRunOrderByWithAggregationInput | SyncRunOrderByWithAggregationInput[]
    by: SyncRunScalarFieldEnum[] | SyncRunScalarFieldEnum
    having?: SyncRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncRunCountAggregateInputType | true
    _avg?: SyncRunAvgAggregateInputType
    _sum?: SyncRunSumAggregateInputType
    _min?: SyncRunMinAggregateInputType
    _max?: SyncRunMaxAggregateInputType
  }

  export type SyncRunGroupByOutputType = {
    id: string
    storeId: string
    sourceType: string
    status: string
    itemsReceived: number
    itemsProcessed: number
    itemsCreated: number
    itemsUpdated: number
    itemsFailed: number
    errorCount: number
    missingSkuCount: number
    invalidPriceCount: number
    outOfStockCount: number
    durationMs: number | null
    startedAt: Date
    finishedAt: Date | null
    _count: SyncRunCountAggregateOutputType | null
    _avg: SyncRunAvgAggregateOutputType | null
    _sum: SyncRunSumAggregateOutputType | null
    _min: SyncRunMinAggregateOutputType | null
    _max: SyncRunMaxAggregateOutputType | null
  }

  type GetSyncRunGroupByPayload<T extends SyncRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncRunGroupByOutputType[P]>
            : GetScalarType<T[P], SyncRunGroupByOutputType[P]>
        }
      >
    >


  export type SyncRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    sourceType?: boolean
    status?: boolean
    itemsReceived?: boolean
    itemsProcessed?: boolean
    itemsCreated?: boolean
    itemsUpdated?: boolean
    itemsFailed?: boolean
    errorCount?: boolean
    missingSkuCount?: boolean
    invalidPriceCount?: boolean
    outOfStockCount?: boolean
    durationMs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    syncErrors?: boolean | SyncRun$syncErrorsArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | SyncRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    sourceType?: boolean
    status?: boolean
    itemsReceived?: boolean
    itemsProcessed?: boolean
    itemsCreated?: boolean
    itemsUpdated?: boolean
    itemsFailed?: boolean
    errorCount?: boolean
    missingSkuCount?: boolean
    invalidPriceCount?: boolean
    outOfStockCount?: boolean
    durationMs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectScalar = {
    id?: boolean
    storeId?: boolean
    sourceType?: boolean
    status?: boolean
    itemsReceived?: boolean
    itemsProcessed?: boolean
    itemsCreated?: boolean
    itemsUpdated?: boolean
    itemsFailed?: boolean
    errorCount?: boolean
    missingSkuCount?: boolean
    invalidPriceCount?: boolean
    outOfStockCount?: boolean
    durationMs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
  }

  export type SyncRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syncErrors?: boolean | SyncRun$syncErrorsArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | SyncRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SyncRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $SyncRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncRun"
    objects: {
      syncErrors: Prisma.$SyncErrorPayload<ExtArgs>[]
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      sourceType: string
      status: string
      itemsReceived: number
      itemsProcessed: number
      itemsCreated: number
      itemsUpdated: number
      itemsFailed: number
      errorCount: number
      missingSkuCount: number
      invalidPriceCount: number
      outOfStockCount: number
      durationMs: number | null
      startedAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["syncRun"]>
    composites: {}
  }

  type SyncRunGetPayload<S extends boolean | null | undefined | SyncRunDefaultArgs> = $Result.GetResult<Prisma.$SyncRunPayload, S>

  type SyncRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SyncRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SyncRunCountAggregateInputType | true
    }

  export interface SyncRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncRun'], meta: { name: 'SyncRun' } }
    /**
     * Find zero or one SyncRun that matches the filter.
     * @param {SyncRunFindUniqueArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncRunFindUniqueArgs>(args: SelectSubset<T, SyncRunFindUniqueArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SyncRun that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SyncRunFindUniqueOrThrowArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncRunFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SyncRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindFirstArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncRunFindFirstArgs>(args?: SelectSubset<T, SyncRunFindFirstArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SyncRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindFirstOrThrowArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncRunFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SyncRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncRuns
     * const syncRuns = await prisma.syncRun.findMany()
     * 
     * // Get first 10 SyncRuns
     * const syncRuns = await prisma.syncRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncRunFindManyArgs>(args?: SelectSubset<T, SyncRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SyncRun.
     * @param {SyncRunCreateArgs} args - Arguments to create a SyncRun.
     * @example
     * // Create one SyncRun
     * const SyncRun = await prisma.syncRun.create({
     *   data: {
     *     // ... data to create a SyncRun
     *   }
     * })
     * 
     */
    create<T extends SyncRunCreateArgs>(args: SelectSubset<T, SyncRunCreateArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SyncRuns.
     * @param {SyncRunCreateManyArgs} args - Arguments to create many SyncRuns.
     * @example
     * // Create many SyncRuns
     * const syncRun = await prisma.syncRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncRunCreateManyArgs>(args?: SelectSubset<T, SyncRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncRuns and returns the data saved in the database.
     * @param {SyncRunCreateManyAndReturnArgs} args - Arguments to create many SyncRuns.
     * @example
     * // Create many SyncRuns
     * const syncRun = await prisma.syncRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncRuns and only return the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncRunCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SyncRun.
     * @param {SyncRunDeleteArgs} args - Arguments to delete one SyncRun.
     * @example
     * // Delete one SyncRun
     * const SyncRun = await prisma.syncRun.delete({
     *   where: {
     *     // ... filter to delete one SyncRun
     *   }
     * })
     * 
     */
    delete<T extends SyncRunDeleteArgs>(args: SelectSubset<T, SyncRunDeleteArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SyncRun.
     * @param {SyncRunUpdateArgs} args - Arguments to update one SyncRun.
     * @example
     * // Update one SyncRun
     * const syncRun = await prisma.syncRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncRunUpdateArgs>(args: SelectSubset<T, SyncRunUpdateArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SyncRuns.
     * @param {SyncRunDeleteManyArgs} args - Arguments to filter SyncRuns to delete.
     * @example
     * // Delete a few SyncRuns
     * const { count } = await prisma.syncRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncRunDeleteManyArgs>(args?: SelectSubset<T, SyncRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncRuns
     * const syncRun = await prisma.syncRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncRunUpdateManyArgs>(args: SelectSubset<T, SyncRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncRun.
     * @param {SyncRunUpsertArgs} args - Arguments to update or create a SyncRun.
     * @example
     * // Update or create a SyncRun
     * const syncRun = await prisma.syncRun.upsert({
     *   create: {
     *     // ... data to create a SyncRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncRun we want to update
     *   }
     * })
     */
    upsert<T extends SyncRunUpsertArgs>(args: SelectSubset<T, SyncRunUpsertArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunCountArgs} args - Arguments to filter SyncRuns to count.
     * @example
     * // Count the number of SyncRuns
     * const count = await prisma.syncRun.count({
     *   where: {
     *     // ... the filter for the SyncRuns we want to count
     *   }
     * })
    **/
    count<T extends SyncRunCountArgs>(
      args?: Subset<T, SyncRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncRunAggregateArgs>(args: Subset<T, SyncRunAggregateArgs>): Prisma.PrismaPromise<GetSyncRunAggregateType<T>>

    /**
     * Group by SyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncRunGroupByArgs['orderBy'] }
        : { orderBy?: SyncRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncRun model
   */
  readonly fields: SyncRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    syncErrors<T extends SyncRun$syncErrorsArgs<ExtArgs> = {}>(args?: Subset<T, SyncRun$syncErrorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findMany"> | Null>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncRun model
   */ 
  interface SyncRunFieldRefs {
    readonly id: FieldRef<"SyncRun", 'String'>
    readonly storeId: FieldRef<"SyncRun", 'String'>
    readonly sourceType: FieldRef<"SyncRun", 'String'>
    readonly status: FieldRef<"SyncRun", 'String'>
    readonly itemsReceived: FieldRef<"SyncRun", 'Int'>
    readonly itemsProcessed: FieldRef<"SyncRun", 'Int'>
    readonly itemsCreated: FieldRef<"SyncRun", 'Int'>
    readonly itemsUpdated: FieldRef<"SyncRun", 'Int'>
    readonly itemsFailed: FieldRef<"SyncRun", 'Int'>
    readonly errorCount: FieldRef<"SyncRun", 'Int'>
    readonly missingSkuCount: FieldRef<"SyncRun", 'Int'>
    readonly invalidPriceCount: FieldRef<"SyncRun", 'Int'>
    readonly outOfStockCount: FieldRef<"SyncRun", 'Int'>
    readonly durationMs: FieldRef<"SyncRun", 'Int'>
    readonly startedAt: FieldRef<"SyncRun", 'DateTime'>
    readonly finishedAt: FieldRef<"SyncRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncRun findUnique
   */
  export type SyncRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun findUniqueOrThrow
   */
  export type SyncRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun findFirst
   */
  export type SyncRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncRuns.
     */
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun findFirstOrThrow
   */
  export type SyncRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncRuns.
     */
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun findMany
   */
  export type SyncRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRuns to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun create
   */
  export type SyncRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncRun.
     */
    data: XOR<SyncRunCreateInput, SyncRunUncheckedCreateInput>
  }

  /**
   * SyncRun createMany
   */
  export type SyncRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncRuns.
     */
    data: SyncRunCreateManyInput | SyncRunCreateManyInput[]
  }

  /**
   * SyncRun createManyAndReturn
   */
  export type SyncRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SyncRuns.
     */
    data: SyncRunCreateManyInput | SyncRunCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncRun update
   */
  export type SyncRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncRun.
     */
    data: XOR<SyncRunUpdateInput, SyncRunUncheckedUpdateInput>
    /**
     * Choose, which SyncRun to update.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun updateMany
   */
  export type SyncRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncRuns.
     */
    data: XOR<SyncRunUpdateManyMutationInput, SyncRunUncheckedUpdateManyInput>
    /**
     * Filter which SyncRuns to update
     */
    where?: SyncRunWhereInput
  }

  /**
   * SyncRun upsert
   */
  export type SyncRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncRun to update in case it exists.
     */
    where: SyncRunWhereUniqueInput
    /**
     * In case the SyncRun found by the `where` argument doesn't exist, create a new SyncRun with this data.
     */
    create: XOR<SyncRunCreateInput, SyncRunUncheckedCreateInput>
    /**
     * In case the SyncRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncRunUpdateInput, SyncRunUncheckedUpdateInput>
  }

  /**
   * SyncRun delete
   */
  export type SyncRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter which SyncRun to delete.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun deleteMany
   */
  export type SyncRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncRuns to delete
     */
    where?: SyncRunWhereInput
  }

  /**
   * SyncRun.syncErrors
   */
  export type SyncRun$syncErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    where?: SyncErrorWhereInput
    orderBy?: SyncErrorOrderByWithRelationInput | SyncErrorOrderByWithRelationInput[]
    cursor?: SyncErrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncErrorScalarFieldEnum | SyncErrorScalarFieldEnum[]
  }

  /**
   * SyncRun without action
   */
  export type SyncRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
  }


  /**
   * Model SyncError
   */

  export type AggregateSyncError = {
    _count: SyncErrorCountAggregateOutputType | null
    _min: SyncErrorMinAggregateOutputType | null
    _max: SyncErrorMaxAggregateOutputType | null
  }

  export type SyncErrorMinAggregateOutputType = {
    id: string | null
    syncRunId: string | null
    storeId: string | null
    externalId: string | null
    errorCode: string | null
    message: string | null
    rawPayload: string | null
    createdAt: Date | null
  }

  export type SyncErrorMaxAggregateOutputType = {
    id: string | null
    syncRunId: string | null
    storeId: string | null
    externalId: string | null
    errorCode: string | null
    message: string | null
    rawPayload: string | null
    createdAt: Date | null
  }

  export type SyncErrorCountAggregateOutputType = {
    id: number
    syncRunId: number
    storeId: number
    externalId: number
    errorCode: number
    message: number
    rawPayload: number
    createdAt: number
    _all: number
  }


  export type SyncErrorMinAggregateInputType = {
    id?: true
    syncRunId?: true
    storeId?: true
    externalId?: true
    errorCode?: true
    message?: true
    rawPayload?: true
    createdAt?: true
  }

  export type SyncErrorMaxAggregateInputType = {
    id?: true
    syncRunId?: true
    storeId?: true
    externalId?: true
    errorCode?: true
    message?: true
    rawPayload?: true
    createdAt?: true
  }

  export type SyncErrorCountAggregateInputType = {
    id?: true
    syncRunId?: true
    storeId?: true
    externalId?: true
    errorCode?: true
    message?: true
    rawPayload?: true
    createdAt?: true
    _all?: true
  }

  export type SyncErrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncError to aggregate.
     */
    where?: SyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncErrors to fetch.
     */
    orderBy?: SyncErrorOrderByWithRelationInput | SyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncErrors
    **/
    _count?: true | SyncErrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncErrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncErrorMaxAggregateInputType
  }

  export type GetSyncErrorAggregateType<T extends SyncErrorAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncError]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncError[P]>
      : GetScalarType<T[P], AggregateSyncError[P]>
  }




  export type SyncErrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncErrorWhereInput
    orderBy?: SyncErrorOrderByWithAggregationInput | SyncErrorOrderByWithAggregationInput[]
    by: SyncErrorScalarFieldEnum[] | SyncErrorScalarFieldEnum
    having?: SyncErrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncErrorCountAggregateInputType | true
    _min?: SyncErrorMinAggregateInputType
    _max?: SyncErrorMaxAggregateInputType
  }

  export type SyncErrorGroupByOutputType = {
    id: string
    syncRunId: string
    storeId: string
    externalId: string | null
    errorCode: string
    message: string
    rawPayload: string | null
    createdAt: Date
    _count: SyncErrorCountAggregateOutputType | null
    _min: SyncErrorMinAggregateOutputType | null
    _max: SyncErrorMaxAggregateOutputType | null
  }

  type GetSyncErrorGroupByPayload<T extends SyncErrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncErrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncErrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncErrorGroupByOutputType[P]>
            : GetScalarType<T[P], SyncErrorGroupByOutputType[P]>
        }
      >
    >


  export type SyncErrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncRunId?: boolean
    storeId?: boolean
    externalId?: boolean
    errorCode?: boolean
    message?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    syncRun?: boolean | SyncRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncError"]>

  export type SyncErrorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncRunId?: boolean
    storeId?: boolean
    externalId?: boolean
    errorCode?: boolean
    message?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    syncRun?: boolean | SyncRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncError"]>

  export type SyncErrorSelectScalar = {
    id?: boolean
    syncRunId?: boolean
    storeId?: boolean
    externalId?: boolean
    errorCode?: boolean
    message?: boolean
    rawPayload?: boolean
    createdAt?: boolean
  }

  export type SyncErrorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    syncRun?: boolean | SyncRunDefaultArgs<ExtArgs>
  }
  export type SyncErrorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    syncRun?: boolean | SyncRunDefaultArgs<ExtArgs>
  }

  export type $SyncErrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncError"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      syncRun: Prisma.$SyncRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      syncRunId: string
      storeId: string
      externalId: string | null
      errorCode: string
      message: string
      rawPayload: string | null
      createdAt: Date
    }, ExtArgs["result"]["syncError"]>
    composites: {}
  }

  type SyncErrorGetPayload<S extends boolean | null | undefined | SyncErrorDefaultArgs> = $Result.GetResult<Prisma.$SyncErrorPayload, S>

  type SyncErrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SyncErrorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SyncErrorCountAggregateInputType | true
    }

  export interface SyncErrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncError'], meta: { name: 'SyncError' } }
    /**
     * Find zero or one SyncError that matches the filter.
     * @param {SyncErrorFindUniqueArgs} args - Arguments to find a SyncError
     * @example
     * // Get one SyncError
     * const syncError = await prisma.syncError.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncErrorFindUniqueArgs>(args: SelectSubset<T, SyncErrorFindUniqueArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SyncError that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SyncErrorFindUniqueOrThrowArgs} args - Arguments to find a SyncError
     * @example
     * // Get one SyncError
     * const syncError = await prisma.syncError.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncErrorFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncErrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SyncError that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorFindFirstArgs} args - Arguments to find a SyncError
     * @example
     * // Get one SyncError
     * const syncError = await prisma.syncError.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncErrorFindFirstArgs>(args?: SelectSubset<T, SyncErrorFindFirstArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SyncError that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorFindFirstOrThrowArgs} args - Arguments to find a SyncError
     * @example
     * // Get one SyncError
     * const syncError = await prisma.syncError.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncErrorFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncErrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SyncErrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncErrors
     * const syncErrors = await prisma.syncError.findMany()
     * 
     * // Get first 10 SyncErrors
     * const syncErrors = await prisma.syncError.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncErrorWithIdOnly = await prisma.syncError.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncErrorFindManyArgs>(args?: SelectSubset<T, SyncErrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SyncError.
     * @param {SyncErrorCreateArgs} args - Arguments to create a SyncError.
     * @example
     * // Create one SyncError
     * const SyncError = await prisma.syncError.create({
     *   data: {
     *     // ... data to create a SyncError
     *   }
     * })
     * 
     */
    create<T extends SyncErrorCreateArgs>(args: SelectSubset<T, SyncErrorCreateArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SyncErrors.
     * @param {SyncErrorCreateManyArgs} args - Arguments to create many SyncErrors.
     * @example
     * // Create many SyncErrors
     * const syncError = await prisma.syncError.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncErrorCreateManyArgs>(args?: SelectSubset<T, SyncErrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncErrors and returns the data saved in the database.
     * @param {SyncErrorCreateManyAndReturnArgs} args - Arguments to create many SyncErrors.
     * @example
     * // Create many SyncErrors
     * const syncError = await prisma.syncError.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncErrors and only return the `id`
     * const syncErrorWithIdOnly = await prisma.syncError.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncErrorCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncErrorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SyncError.
     * @param {SyncErrorDeleteArgs} args - Arguments to delete one SyncError.
     * @example
     * // Delete one SyncError
     * const SyncError = await prisma.syncError.delete({
     *   where: {
     *     // ... filter to delete one SyncError
     *   }
     * })
     * 
     */
    delete<T extends SyncErrorDeleteArgs>(args: SelectSubset<T, SyncErrorDeleteArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SyncError.
     * @param {SyncErrorUpdateArgs} args - Arguments to update one SyncError.
     * @example
     * // Update one SyncError
     * const syncError = await prisma.syncError.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncErrorUpdateArgs>(args: SelectSubset<T, SyncErrorUpdateArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SyncErrors.
     * @param {SyncErrorDeleteManyArgs} args - Arguments to filter SyncErrors to delete.
     * @example
     * // Delete a few SyncErrors
     * const { count } = await prisma.syncError.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncErrorDeleteManyArgs>(args?: SelectSubset<T, SyncErrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncErrors
     * const syncError = await prisma.syncError.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncErrorUpdateManyArgs>(args: SelectSubset<T, SyncErrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncError.
     * @param {SyncErrorUpsertArgs} args - Arguments to update or create a SyncError.
     * @example
     * // Update or create a SyncError
     * const syncError = await prisma.syncError.upsert({
     *   create: {
     *     // ... data to create a SyncError
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncError we want to update
     *   }
     * })
     */
    upsert<T extends SyncErrorUpsertArgs>(args: SelectSubset<T, SyncErrorUpsertArgs<ExtArgs>>): Prisma__SyncErrorClient<$Result.GetResult<Prisma.$SyncErrorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SyncErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorCountArgs} args - Arguments to filter SyncErrors to count.
     * @example
     * // Count the number of SyncErrors
     * const count = await prisma.syncError.count({
     *   where: {
     *     // ... the filter for the SyncErrors we want to count
     *   }
     * })
    **/
    count<T extends SyncErrorCountArgs>(
      args?: Subset<T, SyncErrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncErrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncErrorAggregateArgs>(args: Subset<T, SyncErrorAggregateArgs>): Prisma.PrismaPromise<GetSyncErrorAggregateType<T>>

    /**
     * Group by SyncError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncErrorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncErrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncErrorGroupByArgs['orderBy'] }
        : { orderBy?: SyncErrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncError model
   */
  readonly fields: SyncErrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncError.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncErrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    syncRun<T extends SyncRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SyncRunDefaultArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncError model
   */ 
  interface SyncErrorFieldRefs {
    readonly id: FieldRef<"SyncError", 'String'>
    readonly syncRunId: FieldRef<"SyncError", 'String'>
    readonly storeId: FieldRef<"SyncError", 'String'>
    readonly externalId: FieldRef<"SyncError", 'String'>
    readonly errorCode: FieldRef<"SyncError", 'String'>
    readonly message: FieldRef<"SyncError", 'String'>
    readonly rawPayload: FieldRef<"SyncError", 'String'>
    readonly createdAt: FieldRef<"SyncError", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncError findUnique
   */
  export type SyncErrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * Filter, which SyncError to fetch.
     */
    where: SyncErrorWhereUniqueInput
  }

  /**
   * SyncError findUniqueOrThrow
   */
  export type SyncErrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * Filter, which SyncError to fetch.
     */
    where: SyncErrorWhereUniqueInput
  }

  /**
   * SyncError findFirst
   */
  export type SyncErrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * Filter, which SyncError to fetch.
     */
    where?: SyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncErrors to fetch.
     */
    orderBy?: SyncErrorOrderByWithRelationInput | SyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncErrors.
     */
    cursor?: SyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncErrors.
     */
    distinct?: SyncErrorScalarFieldEnum | SyncErrorScalarFieldEnum[]
  }

  /**
   * SyncError findFirstOrThrow
   */
  export type SyncErrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * Filter, which SyncError to fetch.
     */
    where?: SyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncErrors to fetch.
     */
    orderBy?: SyncErrorOrderByWithRelationInput | SyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncErrors.
     */
    cursor?: SyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncErrors.
     */
    distinct?: SyncErrorScalarFieldEnum | SyncErrorScalarFieldEnum[]
  }

  /**
   * SyncError findMany
   */
  export type SyncErrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * Filter, which SyncErrors to fetch.
     */
    where?: SyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncErrors to fetch.
     */
    orderBy?: SyncErrorOrderByWithRelationInput | SyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncErrors.
     */
    cursor?: SyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncErrors.
     */
    skip?: number
    distinct?: SyncErrorScalarFieldEnum | SyncErrorScalarFieldEnum[]
  }

  /**
   * SyncError create
   */
  export type SyncErrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncError.
     */
    data: XOR<SyncErrorCreateInput, SyncErrorUncheckedCreateInput>
  }

  /**
   * SyncError createMany
   */
  export type SyncErrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncErrors.
     */
    data: SyncErrorCreateManyInput | SyncErrorCreateManyInput[]
  }

  /**
   * SyncError createManyAndReturn
   */
  export type SyncErrorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SyncErrors.
     */
    data: SyncErrorCreateManyInput | SyncErrorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncError update
   */
  export type SyncErrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncError.
     */
    data: XOR<SyncErrorUpdateInput, SyncErrorUncheckedUpdateInput>
    /**
     * Choose, which SyncError to update.
     */
    where: SyncErrorWhereUniqueInput
  }

  /**
   * SyncError updateMany
   */
  export type SyncErrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncErrors.
     */
    data: XOR<SyncErrorUpdateManyMutationInput, SyncErrorUncheckedUpdateManyInput>
    /**
     * Filter which SyncErrors to update
     */
    where?: SyncErrorWhereInput
  }

  /**
   * SyncError upsert
   */
  export type SyncErrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncError to update in case it exists.
     */
    where: SyncErrorWhereUniqueInput
    /**
     * In case the SyncError found by the `where` argument doesn't exist, create a new SyncError with this data.
     */
    create: XOR<SyncErrorCreateInput, SyncErrorUncheckedCreateInput>
    /**
     * In case the SyncError was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncErrorUpdateInput, SyncErrorUncheckedUpdateInput>
  }

  /**
   * SyncError delete
   */
  export type SyncErrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
    /**
     * Filter which SyncError to delete.
     */
    where: SyncErrorWhereUniqueInput
  }

  /**
   * SyncError deleteMany
   */
  export type SyncErrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncErrors to delete
     */
    where?: SyncErrorWhereInput
  }

  /**
   * SyncError without action
   */
  export type SyncErrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncError
     */
    select?: SyncErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncErrorInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
  }

  export type OfferSumAggregateOutputType = {
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    variantId: string | null
    storeId: string | null
    externalProductId: string | null
    externalVariantId: string | null
    url: string | null
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
    currency: string | null
    status: string | null
    stockStatus: string | null
    needsManualReview: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    variantId: string | null
    storeId: string | null
    externalProductId: string | null
    externalVariantId: string | null
    url: string | null
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
    currency: string | null
    status: string | null
    stockStatus: string | null
    needsManualReview: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    variantId: number
    storeId: number
    externalProductId: number
    externalVariantId: number
    url: number
    priceBase: number
    priceShipping: number
    priceTotal: number
    currency: number
    status: number
    stockStatus: number
    needsManualReview: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
  }

  export type OfferSumAggregateInputType = {
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    variantId?: true
    storeId?: true
    externalProductId?: true
    externalVariantId?: true
    url?: true
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
    currency?: true
    status?: true
    stockStatus?: true
    needsManualReview?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    variantId?: true
    storeId?: true
    externalProductId?: true
    externalVariantId?: true
    url?: true
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
    currency?: true
    status?: true
    stockStatus?: true
    needsManualReview?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    variantId?: true
    storeId?: true
    externalProductId?: true
    externalVariantId?: true
    url?: true
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
    currency?: true
    status?: true
    stockStatus?: true
    needsManualReview?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    variantId: string
    storeId: string
    externalProductId: string
    externalVariantId: string
    url: string
    priceBase: number
    priceShipping: number | null
    priceTotal: number | null
    currency: string
    status: string
    stockStatus: string
    needsManualReview: boolean
    lastSeenAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    storeId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    url?: boolean
    priceBase?: boolean
    priceShipping?: boolean
    priceTotal?: boolean
    currency?: boolean
    status?: boolean
    stockStatus?: boolean
    needsManualReview?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    priceHistory?: boolean | Offer$priceHistoryArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variantId?: boolean
    storeId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    url?: boolean
    priceBase?: boolean
    priceShipping?: boolean
    priceTotal?: boolean
    currency?: boolean
    status?: boolean
    stockStatus?: boolean
    needsManualReview?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    variantId?: boolean
    storeId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    url?: boolean
    priceBase?: boolean
    priceShipping?: boolean
    priceTotal?: boolean
    currency?: boolean
    status?: boolean
    stockStatus?: boolean
    needsManualReview?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    priceHistory?: boolean | Offer$priceHistoryArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    variant?: boolean | VariantDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      variant: Prisma.$VariantPayload<ExtArgs>
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variantId: string
      storeId: string
      externalProductId: string
      externalVariantId: string
      url: string
      priceBase: number
      priceShipping: number | null
      priceTotal: number | null
      currency: string
      status: string
      stockStatus: string
      needsManualReview: boolean
      lastSeenAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    variant<T extends VariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantDefaultArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    priceHistory<T extends Offer$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Offer$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */ 
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly variantId: FieldRef<"Offer", 'String'>
    readonly storeId: FieldRef<"Offer", 'String'>
    readonly externalProductId: FieldRef<"Offer", 'String'>
    readonly externalVariantId: FieldRef<"Offer", 'String'>
    readonly url: FieldRef<"Offer", 'String'>
    readonly priceBase: FieldRef<"Offer", 'Float'>
    readonly priceShipping: FieldRef<"Offer", 'Float'>
    readonly priceTotal: FieldRef<"Offer", 'Float'>
    readonly currency: FieldRef<"Offer", 'String'>
    readonly status: FieldRef<"Offer", 'String'>
    readonly stockStatus: FieldRef<"Offer", 'String'>
    readonly needsManualReview: FieldRef<"Offer", 'Boolean'>
    readonly lastSeenAt: FieldRef<"Offer", 'DateTime'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
    readonly updatedAt: FieldRef<"Offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
  }

  /**
   * Offer.priceHistory
   */
  export type Offer$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
  }

  export type PriceHistorySumAggregateOutputType = {
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    id: string | null
    offerId: string | null
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
    currency: string | null
    recordedAt: Date | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    id: string | null
    offerId: string | null
    priceBase: number | null
    priceShipping: number | null
    priceTotal: number | null
    currency: string | null
    recordedAt: Date | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    id: number
    offerId: number
    priceBase: number
    priceShipping: number
    priceTotal: number
    currency: number
    recordedAt: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
  }

  export type PriceHistorySumAggregateInputType = {
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    id?: true
    offerId?: true
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
    currency?: true
    recordedAt?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    id?: true
    offerId?: true
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
    currency?: true
    recordedAt?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    id?: true
    offerId?: true
    priceBase?: true
    priceShipping?: true
    priceTotal?: true
    currency?: true
    recordedAt?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    id: string
    offerId: string
    priceBase: number
    priceShipping: number | null
    priceTotal: number | null
    currency: string
    recordedAt: Date
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    priceBase?: boolean
    priceShipping?: boolean
    priceTotal?: boolean
    currency?: boolean
    recordedAt?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    priceBase?: boolean
    priceShipping?: boolean
    priceTotal?: boolean
    currency?: boolean
    recordedAt?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectScalar = {
    id?: boolean
    offerId?: boolean
    priceBase?: boolean
    priceShipping?: boolean
    priceTotal?: boolean
    currency?: boolean
    recordedAt?: boolean
  }

  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      offerId: string
      priceBase: number
      priceShipping: number | null
      priceTotal: number | null
      currency: string
      recordedAt: Date
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceHistories and returns the data saved in the database.
     * @param {PriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceHistory model
   */ 
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<"PriceHistory", 'String'>
    readonly offerId: FieldRef<"PriceHistory", 'String'>
    readonly priceBase: FieldRef<"PriceHistory", 'Float'>
    readonly priceShipping: FieldRef<"PriceHistory", 'Float'>
    readonly priceTotal: FieldRef<"PriceHistory", 'Float'>
    readonly currency: FieldRef<"PriceHistory", 'String'>
    readonly recordedAt: FieldRef<"PriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
  }

  /**
   * PriceHistory createManyAndReturn
   */
  export type PriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model RawOffer
   */

  export type AggregateRawOffer = {
    _count: RawOfferCountAggregateOutputType | null
    _avg: RawOfferAvgAggregateOutputType | null
    _sum: RawOfferSumAggregateOutputType | null
    _min: RawOfferMinAggregateOutputType | null
    _max: RawOfferMaxAggregateOutputType | null
  }

  export type RawOfferAvgAggregateOutputType = {
    price: number | null
    shipping: number | null
    similarityScore: number | null
  }

  export type RawOfferSumAggregateOutputType = {
    price: number | null
    shipping: number | null
    similarityScore: number | null
  }

  export type RawOfferMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    syncRunId: string | null
    externalId: string | null
    externalVariantId: string | null
    rawTitle: string | null
    rawBrand: string | null
    rawColor: string | null
    rawSize: string | null
    rawGtin: string | null
    rawMpn: string | null
    rawSku: string | null
    url: string | null
    price: number | null
    shipping: number | null
    stock: string | null
    rawPayload: string | null
    status: string | null
    similarityScore: number | null
    isDemo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    confidence: string | null
    matchedBy: string | null
    matchingMethod: string | null
  }

  export type RawOfferMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    syncRunId: string | null
    externalId: string | null
    externalVariantId: string | null
    rawTitle: string | null
    rawBrand: string | null
    rawColor: string | null
    rawSize: string | null
    rawGtin: string | null
    rawMpn: string | null
    rawSku: string | null
    url: string | null
    price: number | null
    shipping: number | null
    stock: string | null
    rawPayload: string | null
    status: string | null
    similarityScore: number | null
    isDemo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    confidence: string | null
    matchedBy: string | null
    matchingMethod: string | null
  }

  export type RawOfferCountAggregateOutputType = {
    id: number
    storeId: number
    syncRunId: number
    externalId: number
    externalVariantId: number
    rawTitle: number
    rawBrand: number
    rawColor: number
    rawSize: number
    rawGtin: number
    rawMpn: number
    rawSku: number
    url: number
    price: number
    shipping: number
    stock: number
    rawPayload: number
    status: number
    similarityScore: number
    isDemo: number
    createdAt: number
    updatedAt: number
    confidence: number
    matchedBy: number
    matchingMethod: number
    _all: number
  }


  export type RawOfferAvgAggregateInputType = {
    price?: true
    shipping?: true
    similarityScore?: true
  }

  export type RawOfferSumAggregateInputType = {
    price?: true
    shipping?: true
    similarityScore?: true
  }

  export type RawOfferMinAggregateInputType = {
    id?: true
    storeId?: true
    syncRunId?: true
    externalId?: true
    externalVariantId?: true
    rawTitle?: true
    rawBrand?: true
    rawColor?: true
    rawSize?: true
    rawGtin?: true
    rawMpn?: true
    rawSku?: true
    url?: true
    price?: true
    shipping?: true
    stock?: true
    rawPayload?: true
    status?: true
    similarityScore?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
    confidence?: true
    matchedBy?: true
    matchingMethod?: true
  }

  export type RawOfferMaxAggregateInputType = {
    id?: true
    storeId?: true
    syncRunId?: true
    externalId?: true
    externalVariantId?: true
    rawTitle?: true
    rawBrand?: true
    rawColor?: true
    rawSize?: true
    rawGtin?: true
    rawMpn?: true
    rawSku?: true
    url?: true
    price?: true
    shipping?: true
    stock?: true
    rawPayload?: true
    status?: true
    similarityScore?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
    confidence?: true
    matchedBy?: true
    matchingMethod?: true
  }

  export type RawOfferCountAggregateInputType = {
    id?: true
    storeId?: true
    syncRunId?: true
    externalId?: true
    externalVariantId?: true
    rawTitle?: true
    rawBrand?: true
    rawColor?: true
    rawSize?: true
    rawGtin?: true
    rawMpn?: true
    rawSku?: true
    url?: true
    price?: true
    shipping?: true
    stock?: true
    rawPayload?: true
    status?: true
    similarityScore?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
    confidence?: true
    matchedBy?: true
    matchingMethod?: true
    _all?: true
  }

  export type RawOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawOffer to aggregate.
     */
    where?: RawOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawOffers to fetch.
     */
    orderBy?: RawOfferOrderByWithRelationInput | RawOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawOffers
    **/
    _count?: true | RawOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RawOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RawOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawOfferMaxAggregateInputType
  }

  export type GetRawOfferAggregateType<T extends RawOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateRawOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawOffer[P]>
      : GetScalarType<T[P], AggregateRawOffer[P]>
  }




  export type RawOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawOfferWhereInput
    orderBy?: RawOfferOrderByWithAggregationInput | RawOfferOrderByWithAggregationInput[]
    by: RawOfferScalarFieldEnum[] | RawOfferScalarFieldEnum
    having?: RawOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawOfferCountAggregateInputType | true
    _avg?: RawOfferAvgAggregateInputType
    _sum?: RawOfferSumAggregateInputType
    _min?: RawOfferMinAggregateInputType
    _max?: RawOfferMaxAggregateInputType
  }

  export type RawOfferGroupByOutputType = {
    id: string
    storeId: string
    syncRunId: string | null
    externalId: string
    externalVariantId: string
    rawTitle: string
    rawBrand: string | null
    rawColor: string | null
    rawSize: string | null
    rawGtin: string | null
    rawMpn: string | null
    rawSku: string | null
    url: string
    price: number
    shipping: number | null
    stock: string | null
    rawPayload: string
    status: string
    similarityScore: number | null
    isDemo: boolean
    createdAt: Date
    updatedAt: Date
    confidence: string | null
    matchedBy: string | null
    matchingMethod: string | null
    _count: RawOfferCountAggregateOutputType | null
    _avg: RawOfferAvgAggregateOutputType | null
    _sum: RawOfferSumAggregateOutputType | null
    _min: RawOfferMinAggregateOutputType | null
    _max: RawOfferMaxAggregateOutputType | null
  }

  type GetRawOfferGroupByPayload<T extends RawOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawOfferGroupByOutputType[P]>
            : GetScalarType<T[P], RawOfferGroupByOutputType[P]>
        }
      >
    >


  export type RawOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    syncRunId?: boolean
    externalId?: boolean
    externalVariantId?: boolean
    rawTitle?: boolean
    rawBrand?: boolean
    rawColor?: boolean
    rawSize?: boolean
    rawGtin?: boolean
    rawMpn?: boolean
    rawSku?: boolean
    url?: boolean
    price?: boolean
    shipping?: boolean
    stock?: boolean
    rawPayload?: boolean
    status?: boolean
    similarityScore?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    confidence?: boolean
    matchedBy?: boolean
    matchingMethod?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawOffer"]>

  export type RawOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    syncRunId?: boolean
    externalId?: boolean
    externalVariantId?: boolean
    rawTitle?: boolean
    rawBrand?: boolean
    rawColor?: boolean
    rawSize?: boolean
    rawGtin?: boolean
    rawMpn?: boolean
    rawSku?: boolean
    url?: boolean
    price?: boolean
    shipping?: boolean
    stock?: boolean
    rawPayload?: boolean
    status?: boolean
    similarityScore?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    confidence?: boolean
    matchedBy?: boolean
    matchingMethod?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawOffer"]>

  export type RawOfferSelectScalar = {
    id?: boolean
    storeId?: boolean
    syncRunId?: boolean
    externalId?: boolean
    externalVariantId?: boolean
    rawTitle?: boolean
    rawBrand?: boolean
    rawColor?: boolean
    rawSize?: boolean
    rawGtin?: boolean
    rawMpn?: boolean
    rawSku?: boolean
    url?: boolean
    price?: boolean
    shipping?: boolean
    stock?: boolean
    rawPayload?: boolean
    status?: boolean
    similarityScore?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    confidence?: boolean
    matchedBy?: boolean
    matchingMethod?: boolean
  }

  export type RawOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type RawOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $RawOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawOffer"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      syncRunId: string | null
      externalId: string
      externalVariantId: string
      rawTitle: string
      rawBrand: string | null
      rawColor: string | null
      rawSize: string | null
      rawGtin: string | null
      rawMpn: string | null
      rawSku: string | null
      url: string
      price: number
      shipping: number | null
      stock: string | null
      rawPayload: string
      status: string
      similarityScore: number | null
      isDemo: boolean
      createdAt: Date
      updatedAt: Date
      confidence: string | null
      matchedBy: string | null
      matchingMethod: string | null
    }, ExtArgs["result"]["rawOffer"]>
    composites: {}
  }

  type RawOfferGetPayload<S extends boolean | null | undefined | RawOfferDefaultArgs> = $Result.GetResult<Prisma.$RawOfferPayload, S>

  type RawOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RawOfferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RawOfferCountAggregateInputType | true
    }

  export interface RawOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawOffer'], meta: { name: 'RawOffer' } }
    /**
     * Find zero or one RawOffer that matches the filter.
     * @param {RawOfferFindUniqueArgs} args - Arguments to find a RawOffer
     * @example
     * // Get one RawOffer
     * const rawOffer = await prisma.rawOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawOfferFindUniqueArgs>(args: SelectSubset<T, RawOfferFindUniqueArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RawOffer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RawOfferFindUniqueOrThrowArgs} args - Arguments to find a RawOffer
     * @example
     * // Get one RawOffer
     * const rawOffer = await prisma.rawOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, RawOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RawOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferFindFirstArgs} args - Arguments to find a RawOffer
     * @example
     * // Get one RawOffer
     * const rawOffer = await prisma.rawOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawOfferFindFirstArgs>(args?: SelectSubset<T, RawOfferFindFirstArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RawOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferFindFirstOrThrowArgs} args - Arguments to find a RawOffer
     * @example
     * // Get one RawOffer
     * const rawOffer = await prisma.rawOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, RawOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RawOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawOffers
     * const rawOffers = await prisma.rawOffer.findMany()
     * 
     * // Get first 10 RawOffers
     * const rawOffers = await prisma.rawOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawOfferWithIdOnly = await prisma.rawOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawOfferFindManyArgs>(args?: SelectSubset<T, RawOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RawOffer.
     * @param {RawOfferCreateArgs} args - Arguments to create a RawOffer.
     * @example
     * // Create one RawOffer
     * const RawOffer = await prisma.rawOffer.create({
     *   data: {
     *     // ... data to create a RawOffer
     *   }
     * })
     * 
     */
    create<T extends RawOfferCreateArgs>(args: SelectSubset<T, RawOfferCreateArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RawOffers.
     * @param {RawOfferCreateManyArgs} args - Arguments to create many RawOffers.
     * @example
     * // Create many RawOffers
     * const rawOffer = await prisma.rawOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawOfferCreateManyArgs>(args?: SelectSubset<T, RawOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawOffers and returns the data saved in the database.
     * @param {RawOfferCreateManyAndReturnArgs} args - Arguments to create many RawOffers.
     * @example
     * // Create many RawOffers
     * const rawOffer = await prisma.rawOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawOffers and only return the `id`
     * const rawOfferWithIdOnly = await prisma.rawOffer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, RawOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RawOffer.
     * @param {RawOfferDeleteArgs} args - Arguments to delete one RawOffer.
     * @example
     * // Delete one RawOffer
     * const RawOffer = await prisma.rawOffer.delete({
     *   where: {
     *     // ... filter to delete one RawOffer
     *   }
     * })
     * 
     */
    delete<T extends RawOfferDeleteArgs>(args: SelectSubset<T, RawOfferDeleteArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RawOffer.
     * @param {RawOfferUpdateArgs} args - Arguments to update one RawOffer.
     * @example
     * // Update one RawOffer
     * const rawOffer = await prisma.rawOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawOfferUpdateArgs>(args: SelectSubset<T, RawOfferUpdateArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RawOffers.
     * @param {RawOfferDeleteManyArgs} args - Arguments to filter RawOffers to delete.
     * @example
     * // Delete a few RawOffers
     * const { count } = await prisma.rawOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawOfferDeleteManyArgs>(args?: SelectSubset<T, RawOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawOffers
     * const rawOffer = await prisma.rawOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawOfferUpdateManyArgs>(args: SelectSubset<T, RawOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RawOffer.
     * @param {RawOfferUpsertArgs} args - Arguments to update or create a RawOffer.
     * @example
     * // Update or create a RawOffer
     * const rawOffer = await prisma.rawOffer.upsert({
     *   create: {
     *     // ... data to create a RawOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawOffer we want to update
     *   }
     * })
     */
    upsert<T extends RawOfferUpsertArgs>(args: SelectSubset<T, RawOfferUpsertArgs<ExtArgs>>): Prisma__RawOfferClient<$Result.GetResult<Prisma.$RawOfferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RawOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferCountArgs} args - Arguments to filter RawOffers to count.
     * @example
     * // Count the number of RawOffers
     * const count = await prisma.rawOffer.count({
     *   where: {
     *     // ... the filter for the RawOffers we want to count
     *   }
     * })
    **/
    count<T extends RawOfferCountArgs>(
      args?: Subset<T, RawOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RawOfferAggregateArgs>(args: Subset<T, RawOfferAggregateArgs>): Prisma.PrismaPromise<GetRawOfferAggregateType<T>>

    /**
     * Group by RawOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawOfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RawOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawOfferGroupByArgs['orderBy'] }
        : { orderBy?: RawOfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RawOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawOffer model
   */
  readonly fields: RawOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RawOffer model
   */ 
  interface RawOfferFieldRefs {
    readonly id: FieldRef<"RawOffer", 'String'>
    readonly storeId: FieldRef<"RawOffer", 'String'>
    readonly syncRunId: FieldRef<"RawOffer", 'String'>
    readonly externalId: FieldRef<"RawOffer", 'String'>
    readonly externalVariantId: FieldRef<"RawOffer", 'String'>
    readonly rawTitle: FieldRef<"RawOffer", 'String'>
    readonly rawBrand: FieldRef<"RawOffer", 'String'>
    readonly rawColor: FieldRef<"RawOffer", 'String'>
    readonly rawSize: FieldRef<"RawOffer", 'String'>
    readonly rawGtin: FieldRef<"RawOffer", 'String'>
    readonly rawMpn: FieldRef<"RawOffer", 'String'>
    readonly rawSku: FieldRef<"RawOffer", 'String'>
    readonly url: FieldRef<"RawOffer", 'String'>
    readonly price: FieldRef<"RawOffer", 'Float'>
    readonly shipping: FieldRef<"RawOffer", 'Float'>
    readonly stock: FieldRef<"RawOffer", 'String'>
    readonly rawPayload: FieldRef<"RawOffer", 'String'>
    readonly status: FieldRef<"RawOffer", 'String'>
    readonly similarityScore: FieldRef<"RawOffer", 'Float'>
    readonly isDemo: FieldRef<"RawOffer", 'Boolean'>
    readonly createdAt: FieldRef<"RawOffer", 'DateTime'>
    readonly updatedAt: FieldRef<"RawOffer", 'DateTime'>
    readonly confidence: FieldRef<"RawOffer", 'String'>
    readonly matchedBy: FieldRef<"RawOffer", 'String'>
    readonly matchingMethod: FieldRef<"RawOffer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RawOffer findUnique
   */
  export type RawOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * Filter, which RawOffer to fetch.
     */
    where: RawOfferWhereUniqueInput
  }

  /**
   * RawOffer findUniqueOrThrow
   */
  export type RawOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * Filter, which RawOffer to fetch.
     */
    where: RawOfferWhereUniqueInput
  }

  /**
   * RawOffer findFirst
   */
  export type RawOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * Filter, which RawOffer to fetch.
     */
    where?: RawOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawOffers to fetch.
     */
    orderBy?: RawOfferOrderByWithRelationInput | RawOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawOffers.
     */
    cursor?: RawOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawOffers.
     */
    distinct?: RawOfferScalarFieldEnum | RawOfferScalarFieldEnum[]
  }

  /**
   * RawOffer findFirstOrThrow
   */
  export type RawOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * Filter, which RawOffer to fetch.
     */
    where?: RawOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawOffers to fetch.
     */
    orderBy?: RawOfferOrderByWithRelationInput | RawOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawOffers.
     */
    cursor?: RawOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawOffers.
     */
    distinct?: RawOfferScalarFieldEnum | RawOfferScalarFieldEnum[]
  }

  /**
   * RawOffer findMany
   */
  export type RawOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * Filter, which RawOffers to fetch.
     */
    where?: RawOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawOffers to fetch.
     */
    orderBy?: RawOfferOrderByWithRelationInput | RawOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawOffers.
     */
    cursor?: RawOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawOffers.
     */
    skip?: number
    distinct?: RawOfferScalarFieldEnum | RawOfferScalarFieldEnum[]
  }

  /**
   * RawOffer create
   */
  export type RawOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a RawOffer.
     */
    data: XOR<RawOfferCreateInput, RawOfferUncheckedCreateInput>
  }

  /**
   * RawOffer createMany
   */
  export type RawOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawOffers.
     */
    data: RawOfferCreateManyInput | RawOfferCreateManyInput[]
  }

  /**
   * RawOffer createManyAndReturn
   */
  export type RawOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RawOffers.
     */
    data: RawOfferCreateManyInput | RawOfferCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawOffer update
   */
  export type RawOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a RawOffer.
     */
    data: XOR<RawOfferUpdateInput, RawOfferUncheckedUpdateInput>
    /**
     * Choose, which RawOffer to update.
     */
    where: RawOfferWhereUniqueInput
  }

  /**
   * RawOffer updateMany
   */
  export type RawOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawOffers.
     */
    data: XOR<RawOfferUpdateManyMutationInput, RawOfferUncheckedUpdateManyInput>
    /**
     * Filter which RawOffers to update
     */
    where?: RawOfferWhereInput
  }

  /**
   * RawOffer upsert
   */
  export type RawOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the RawOffer to update in case it exists.
     */
    where: RawOfferWhereUniqueInput
    /**
     * In case the RawOffer found by the `where` argument doesn't exist, create a new RawOffer with this data.
     */
    create: XOR<RawOfferCreateInput, RawOfferUncheckedCreateInput>
    /**
     * In case the RawOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawOfferUpdateInput, RawOfferUncheckedUpdateInput>
  }

  /**
   * RawOffer delete
   */
  export type RawOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
    /**
     * Filter which RawOffer to delete.
     */
    where: RawOfferWhereUniqueInput
  }

  /**
   * RawOffer deleteMany
   */
  export type RawOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawOffers to delete
     */
    where?: RawOfferWhereInput
  }

  /**
   * RawOffer without action
   */
  export type RawOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawOffer
     */
    select?: RawOfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawOfferInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsEvent
   */

  export type AggregateAnalyticsEvent = {
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  export type AnalyticsEventMinAggregateOutputType = {
    id: string | null
    type: string | null
    sessionId: string | null
    productId: string | null
    variantId: string | null
    offerId: string | null
    storeId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventMaxAggregateOutputType = {
    id: string | null
    type: string | null
    sessionId: string | null
    productId: string | null
    variantId: string | null
    offerId: string | null
    storeId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventCountAggregateOutputType = {
    id: number
    type: number
    sessionId: number
    productId: number
    variantId: number
    offerId: number
    storeId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AnalyticsEventMinAggregateInputType = {
    id?: true
    type?: true
    sessionId?: true
    productId?: true
    variantId?: true
    offerId?: true
    storeId?: true
    metadata?: true
    createdAt?: true
  }

  export type AnalyticsEventMaxAggregateInputType = {
    id?: true
    type?: true
    sessionId?: true
    productId?: true
    variantId?: true
    offerId?: true
    storeId?: true
    metadata?: true
    createdAt?: true
  }

  export type AnalyticsEventCountAggregateInputType = {
    id?: true
    type?: true
    sessionId?: true
    productId?: true
    variantId?: true
    offerId?: true
    storeId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvent to aggregate.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsEvents
    **/
    _count?: true | AnalyticsEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type GetAnalyticsEventAggregateType<T extends AnalyticsEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
      : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
  }




  export type AnalyticsEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsEventWhereInput
    orderBy?: AnalyticsEventOrderByWithAggregationInput | AnalyticsEventOrderByWithAggregationInput[]
    by: AnalyticsEventScalarFieldEnum[] | AnalyticsEventScalarFieldEnum
    having?: AnalyticsEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsEventCountAggregateInputType | true
    _min?: AnalyticsEventMinAggregateInputType
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type AnalyticsEventGroupByOutputType = {
    id: string
    type: string
    sessionId: string | null
    productId: string | null
    variantId: string | null
    offerId: string | null
    storeId: string | null
    metadata: string | null
    createdAt: Date
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  type GetAnalyticsEventGroupByPayload<T extends AnalyticsEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    sessionId?: boolean
    productId?: boolean
    variantId?: boolean
    offerId?: boolean
    storeId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    sessionId?: boolean
    productId?: boolean
    variantId?: boolean
    offerId?: boolean
    storeId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectScalar = {
    id?: boolean
    type?: boolean
    sessionId?: boolean
    productId?: boolean
    variantId?: boolean
    offerId?: boolean
    storeId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }


  export type $AnalyticsEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      sessionId: string | null
      productId: string | null
      variantId: string | null
      offerId: string | null
      storeId: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["analyticsEvent"]>
    composites: {}
  }

  type AnalyticsEventGetPayload<S extends boolean | null | undefined | AnalyticsEventDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsEventPayload, S>

  type AnalyticsEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalyticsEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalyticsEventCountAggregateInputType | true
    }

  export interface AnalyticsEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsEvent'], meta: { name: 'AnalyticsEvent' } }
    /**
     * Find zero or one AnalyticsEvent that matches the filter.
     * @param {AnalyticsEventFindUniqueArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsEventFindUniqueArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnalyticsEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalyticsEventFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnalyticsEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsEventFindFirstArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnalyticsEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnalyticsEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany()
     * 
     * // Get first 10 AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsEventFindManyArgs>(args?: SelectSubset<T, AnalyticsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnalyticsEvent.
     * @param {AnalyticsEventCreateArgs} args - Arguments to create a AnalyticsEvent.
     * @example
     * // Create one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.create({
     *   data: {
     *     // ... data to create a AnalyticsEvent
     *   }
     * })
     * 
     */
    create<T extends AnalyticsEventCreateArgs>(args: SelectSubset<T, AnalyticsEventCreateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnalyticsEvents.
     * @param {AnalyticsEventCreateManyArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsEventCreateManyArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsEvents and returns the data saved in the database.
     * @param {AnalyticsEventCreateManyAndReturnArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnalyticsEvent.
     * @param {AnalyticsEventDeleteArgs} args - Arguments to delete one AnalyticsEvent.
     * @example
     * // Delete one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsEvent
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsEventDeleteArgs>(args: SelectSubset<T, AnalyticsEventDeleteArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnalyticsEvent.
     * @param {AnalyticsEventUpdateArgs} args - Arguments to update one AnalyticsEvent.
     * @example
     * // Update one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsEventUpdateArgs>(args: SelectSubset<T, AnalyticsEventUpdateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnalyticsEvents.
     * @param {AnalyticsEventDeleteManyArgs} args - Arguments to filter AnalyticsEvents to delete.
     * @example
     * // Delete a few AnalyticsEvents
     * const { count } = await prisma.analyticsEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsEventDeleteManyArgs>(args?: SelectSubset<T, AnalyticsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsEventUpdateManyArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalyticsEvent.
     * @param {AnalyticsEventUpsertArgs} args - Arguments to update or create a AnalyticsEvent.
     * @example
     * // Update or create a AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.upsert({
     *   create: {
     *     // ... data to create a AnalyticsEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsEventUpsertArgs>(args: SelectSubset<T, AnalyticsEventUpsertArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventCountArgs} args - Arguments to filter AnalyticsEvents to count.
     * @example
     * // Count the number of AnalyticsEvents
     * const count = await prisma.analyticsEvent.count({
     *   where: {
     *     // ... the filter for the AnalyticsEvents we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsEventCountArgs>(
      args?: Subset<T, AnalyticsEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyticsEventAggregateArgs>(args: Subset<T, AnalyticsEventAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsEventAggregateType<T>>

    /**
     * Group by AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyticsEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsEventGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsEvent model
   */
  readonly fields: AnalyticsEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalyticsEvent model
   */ 
  interface AnalyticsEventFieldRefs {
    readonly id: FieldRef<"AnalyticsEvent", 'String'>
    readonly type: FieldRef<"AnalyticsEvent", 'String'>
    readonly sessionId: FieldRef<"AnalyticsEvent", 'String'>
    readonly productId: FieldRef<"AnalyticsEvent", 'String'>
    readonly variantId: FieldRef<"AnalyticsEvent", 'String'>
    readonly offerId: FieldRef<"AnalyticsEvent", 'String'>
    readonly storeId: FieldRef<"AnalyticsEvent", 'String'>
    readonly metadata: FieldRef<"AnalyticsEvent", 'String'>
    readonly createdAt: FieldRef<"AnalyticsEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsEvent findUnique
   */
  export type AnalyticsEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findUniqueOrThrow
   */
  export type AnalyticsEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findFirst
   */
  export type AnalyticsEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findFirstOrThrow
   */
  export type AnalyticsEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findMany
   */
  export type AnalyticsEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvents to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent create
   */
  export type AnalyticsEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
  }

  /**
   * AnalyticsEvent createMany
   */
  export type AnalyticsEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
  }

  /**
   * AnalyticsEvent createManyAndReturn
   */
  export type AnalyticsEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
  }

  /**
   * AnalyticsEvent update
   */
  export type AnalyticsEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsEvent to update.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent updateMany
   */
  export type AnalyticsEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
  }

  /**
   * AnalyticsEvent upsert
   */
  export type AnalyticsEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsEvent to update in case it exists.
     */
    where: AnalyticsEventWhereUniqueInput
    /**
     * In case the AnalyticsEvent found by the `where` argument doesn't exist, create a new AnalyticsEvent with this data.
     */
    create: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
    /**
     * In case the AnalyticsEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
  }

  /**
   * AnalyticsEvent delete
   */
  export type AnalyticsEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Filter which AnalyticsEvent to delete.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent deleteMany
   */
  export type AnalyticsEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvents to delete
     */
    where?: AnalyticsEventWhereInput
  }

  /**
   * AnalyticsEvent without action
   */
  export type AnalyticsEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
  }


  /**
   * Model MatchingDecision
   */

  export type AggregateMatchingDecision = {
    _count: MatchingDecisionCountAggregateOutputType | null
    _avg: MatchingDecisionAvgAggregateOutputType | null
    _sum: MatchingDecisionSumAggregateOutputType | null
    _min: MatchingDecisionMinAggregateOutputType | null
    _max: MatchingDecisionMaxAggregateOutputType | null
  }

  export type MatchingDecisionAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type MatchingDecisionSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type MatchingDecisionMinAggregateOutputType = {
    id: string | null
    rawOfferId: string | null
    candidateProductId: string | null
    confidenceScore: number | null
    confidenceLevel: string | null
    signals: string | null
    reason: string | null
    decision: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date | null
  }

  export type MatchingDecisionMaxAggregateOutputType = {
    id: string | null
    rawOfferId: string | null
    candidateProductId: string | null
    confidenceScore: number | null
    confidenceLevel: string | null
    signals: string | null
    reason: string | null
    decision: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date | null
  }

  export type MatchingDecisionCountAggregateOutputType = {
    id: number
    rawOfferId: number
    candidateProductId: number
    confidenceScore: number
    confidenceLevel: number
    signals: number
    reason: number
    decision: number
    reviewedBy: number
    reviewedAt: number
    createdAt: number
    _all: number
  }


  export type MatchingDecisionAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type MatchingDecisionSumAggregateInputType = {
    confidenceScore?: true
  }

  export type MatchingDecisionMinAggregateInputType = {
    id?: true
    rawOfferId?: true
    candidateProductId?: true
    confidenceScore?: true
    confidenceLevel?: true
    signals?: true
    reason?: true
    decision?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
  }

  export type MatchingDecisionMaxAggregateInputType = {
    id?: true
    rawOfferId?: true
    candidateProductId?: true
    confidenceScore?: true
    confidenceLevel?: true
    signals?: true
    reason?: true
    decision?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
  }

  export type MatchingDecisionCountAggregateInputType = {
    id?: true
    rawOfferId?: true
    candidateProductId?: true
    confidenceScore?: true
    confidenceLevel?: true
    signals?: true
    reason?: true
    decision?: true
    reviewedBy?: true
    reviewedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MatchingDecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingDecision to aggregate.
     */
    where?: MatchingDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingDecisions to fetch.
     */
    orderBy?: MatchingDecisionOrderByWithRelationInput | MatchingDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchingDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchingDecisions
    **/
    _count?: true | MatchingDecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchingDecisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchingDecisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchingDecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchingDecisionMaxAggregateInputType
  }

  export type GetMatchingDecisionAggregateType<T extends MatchingDecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchingDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchingDecision[P]>
      : GetScalarType<T[P], AggregateMatchingDecision[P]>
  }




  export type MatchingDecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchingDecisionWhereInput
    orderBy?: MatchingDecisionOrderByWithAggregationInput | MatchingDecisionOrderByWithAggregationInput[]
    by: MatchingDecisionScalarFieldEnum[] | MatchingDecisionScalarFieldEnum
    having?: MatchingDecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchingDecisionCountAggregateInputType | true
    _avg?: MatchingDecisionAvgAggregateInputType
    _sum?: MatchingDecisionSumAggregateInputType
    _min?: MatchingDecisionMinAggregateInputType
    _max?: MatchingDecisionMaxAggregateInputType
  }

  export type MatchingDecisionGroupByOutputType = {
    id: string
    rawOfferId: string
    candidateProductId: string | null
    confidenceScore: number | null
    confidenceLevel: string
    signals: string
    reason: string
    decision: string
    reviewedBy: string | null
    reviewedAt: Date | null
    createdAt: Date
    _count: MatchingDecisionCountAggregateOutputType | null
    _avg: MatchingDecisionAvgAggregateOutputType | null
    _sum: MatchingDecisionSumAggregateOutputType | null
    _min: MatchingDecisionMinAggregateOutputType | null
    _max: MatchingDecisionMaxAggregateOutputType | null
  }

  type GetMatchingDecisionGroupByPayload<T extends MatchingDecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchingDecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchingDecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchingDecisionGroupByOutputType[P]>
            : GetScalarType<T[P], MatchingDecisionGroupByOutputType[P]>
        }
      >
    >


  export type MatchingDecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawOfferId?: boolean
    candidateProductId?: boolean
    confidenceScore?: boolean
    confidenceLevel?: boolean
    signals?: boolean
    reason?: boolean
    decision?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["matchingDecision"]>

  export type MatchingDecisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawOfferId?: boolean
    candidateProductId?: boolean
    confidenceScore?: boolean
    confidenceLevel?: boolean
    signals?: boolean
    reason?: boolean
    decision?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["matchingDecision"]>

  export type MatchingDecisionSelectScalar = {
    id?: boolean
    rawOfferId?: boolean
    candidateProductId?: boolean
    confidenceScore?: boolean
    confidenceLevel?: boolean
    signals?: boolean
    reason?: boolean
    decision?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
  }


  export type $MatchingDecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchingDecision"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rawOfferId: string
      candidateProductId: string | null
      confidenceScore: number | null
      confidenceLevel: string
      signals: string
      reason: string
      decision: string
      reviewedBy: string | null
      reviewedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["matchingDecision"]>
    composites: {}
  }

  type MatchingDecisionGetPayload<S extends boolean | null | undefined | MatchingDecisionDefaultArgs> = $Result.GetResult<Prisma.$MatchingDecisionPayload, S>

  type MatchingDecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchingDecisionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchingDecisionCountAggregateInputType | true
    }

  export interface MatchingDecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchingDecision'], meta: { name: 'MatchingDecision' } }
    /**
     * Find zero or one MatchingDecision that matches the filter.
     * @param {MatchingDecisionFindUniqueArgs} args - Arguments to find a MatchingDecision
     * @example
     * // Get one MatchingDecision
     * const matchingDecision = await prisma.matchingDecision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchingDecisionFindUniqueArgs>(args: SelectSubset<T, MatchingDecisionFindUniqueArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MatchingDecision that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatchingDecisionFindUniqueOrThrowArgs} args - Arguments to find a MatchingDecision
     * @example
     * // Get one MatchingDecision
     * const matchingDecision = await prisma.matchingDecision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchingDecisionFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchingDecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MatchingDecision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionFindFirstArgs} args - Arguments to find a MatchingDecision
     * @example
     * // Get one MatchingDecision
     * const matchingDecision = await prisma.matchingDecision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchingDecisionFindFirstArgs>(args?: SelectSubset<T, MatchingDecisionFindFirstArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MatchingDecision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionFindFirstOrThrowArgs} args - Arguments to find a MatchingDecision
     * @example
     * // Get one MatchingDecision
     * const matchingDecision = await prisma.matchingDecision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchingDecisionFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchingDecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MatchingDecisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchingDecisions
     * const matchingDecisions = await prisma.matchingDecision.findMany()
     * 
     * // Get first 10 MatchingDecisions
     * const matchingDecisions = await prisma.matchingDecision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchingDecisionWithIdOnly = await prisma.matchingDecision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchingDecisionFindManyArgs>(args?: SelectSubset<T, MatchingDecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MatchingDecision.
     * @param {MatchingDecisionCreateArgs} args - Arguments to create a MatchingDecision.
     * @example
     * // Create one MatchingDecision
     * const MatchingDecision = await prisma.matchingDecision.create({
     *   data: {
     *     // ... data to create a MatchingDecision
     *   }
     * })
     * 
     */
    create<T extends MatchingDecisionCreateArgs>(args: SelectSubset<T, MatchingDecisionCreateArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MatchingDecisions.
     * @param {MatchingDecisionCreateManyArgs} args - Arguments to create many MatchingDecisions.
     * @example
     * // Create many MatchingDecisions
     * const matchingDecision = await prisma.matchingDecision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchingDecisionCreateManyArgs>(args?: SelectSubset<T, MatchingDecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchingDecisions and returns the data saved in the database.
     * @param {MatchingDecisionCreateManyAndReturnArgs} args - Arguments to create many MatchingDecisions.
     * @example
     * // Create many MatchingDecisions
     * const matchingDecision = await prisma.matchingDecision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchingDecisions and only return the `id`
     * const matchingDecisionWithIdOnly = await prisma.matchingDecision.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchingDecisionCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchingDecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MatchingDecision.
     * @param {MatchingDecisionDeleteArgs} args - Arguments to delete one MatchingDecision.
     * @example
     * // Delete one MatchingDecision
     * const MatchingDecision = await prisma.matchingDecision.delete({
     *   where: {
     *     // ... filter to delete one MatchingDecision
     *   }
     * })
     * 
     */
    delete<T extends MatchingDecisionDeleteArgs>(args: SelectSubset<T, MatchingDecisionDeleteArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MatchingDecision.
     * @param {MatchingDecisionUpdateArgs} args - Arguments to update one MatchingDecision.
     * @example
     * // Update one MatchingDecision
     * const matchingDecision = await prisma.matchingDecision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchingDecisionUpdateArgs>(args: SelectSubset<T, MatchingDecisionUpdateArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MatchingDecisions.
     * @param {MatchingDecisionDeleteManyArgs} args - Arguments to filter MatchingDecisions to delete.
     * @example
     * // Delete a few MatchingDecisions
     * const { count } = await prisma.matchingDecision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchingDecisionDeleteManyArgs>(args?: SelectSubset<T, MatchingDecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchingDecisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchingDecisions
     * const matchingDecision = await prisma.matchingDecision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchingDecisionUpdateManyArgs>(args: SelectSubset<T, MatchingDecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchingDecision.
     * @param {MatchingDecisionUpsertArgs} args - Arguments to update or create a MatchingDecision.
     * @example
     * // Update or create a MatchingDecision
     * const matchingDecision = await prisma.matchingDecision.upsert({
     *   create: {
     *     // ... data to create a MatchingDecision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchingDecision we want to update
     *   }
     * })
     */
    upsert<T extends MatchingDecisionUpsertArgs>(args: SelectSubset<T, MatchingDecisionUpsertArgs<ExtArgs>>): Prisma__MatchingDecisionClient<$Result.GetResult<Prisma.$MatchingDecisionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MatchingDecisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionCountArgs} args - Arguments to filter MatchingDecisions to count.
     * @example
     * // Count the number of MatchingDecisions
     * const count = await prisma.matchingDecision.count({
     *   where: {
     *     // ... the filter for the MatchingDecisions we want to count
     *   }
     * })
    **/
    count<T extends MatchingDecisionCountArgs>(
      args?: Subset<T, MatchingDecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchingDecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchingDecision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchingDecisionAggregateArgs>(args: Subset<T, MatchingDecisionAggregateArgs>): Prisma.PrismaPromise<GetMatchingDecisionAggregateType<T>>

    /**
     * Group by MatchingDecision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingDecisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchingDecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchingDecisionGroupByArgs['orderBy'] }
        : { orderBy?: MatchingDecisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchingDecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchingDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchingDecision model
   */
  readonly fields: MatchingDecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchingDecision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchingDecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchingDecision model
   */ 
  interface MatchingDecisionFieldRefs {
    readonly id: FieldRef<"MatchingDecision", 'String'>
    readonly rawOfferId: FieldRef<"MatchingDecision", 'String'>
    readonly candidateProductId: FieldRef<"MatchingDecision", 'String'>
    readonly confidenceScore: FieldRef<"MatchingDecision", 'Float'>
    readonly confidenceLevel: FieldRef<"MatchingDecision", 'String'>
    readonly signals: FieldRef<"MatchingDecision", 'String'>
    readonly reason: FieldRef<"MatchingDecision", 'String'>
    readonly decision: FieldRef<"MatchingDecision", 'String'>
    readonly reviewedBy: FieldRef<"MatchingDecision", 'String'>
    readonly reviewedAt: FieldRef<"MatchingDecision", 'DateTime'>
    readonly createdAt: FieldRef<"MatchingDecision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchingDecision findUnique
   */
  export type MatchingDecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * Filter, which MatchingDecision to fetch.
     */
    where: MatchingDecisionWhereUniqueInput
  }

  /**
   * MatchingDecision findUniqueOrThrow
   */
  export type MatchingDecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * Filter, which MatchingDecision to fetch.
     */
    where: MatchingDecisionWhereUniqueInput
  }

  /**
   * MatchingDecision findFirst
   */
  export type MatchingDecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * Filter, which MatchingDecision to fetch.
     */
    where?: MatchingDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingDecisions to fetch.
     */
    orderBy?: MatchingDecisionOrderByWithRelationInput | MatchingDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingDecisions.
     */
    cursor?: MatchingDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingDecisions.
     */
    distinct?: MatchingDecisionScalarFieldEnum | MatchingDecisionScalarFieldEnum[]
  }

  /**
   * MatchingDecision findFirstOrThrow
   */
  export type MatchingDecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * Filter, which MatchingDecision to fetch.
     */
    where?: MatchingDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingDecisions to fetch.
     */
    orderBy?: MatchingDecisionOrderByWithRelationInput | MatchingDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingDecisions.
     */
    cursor?: MatchingDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingDecisions.
     */
    distinct?: MatchingDecisionScalarFieldEnum | MatchingDecisionScalarFieldEnum[]
  }

  /**
   * MatchingDecision findMany
   */
  export type MatchingDecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * Filter, which MatchingDecisions to fetch.
     */
    where?: MatchingDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingDecisions to fetch.
     */
    orderBy?: MatchingDecisionOrderByWithRelationInput | MatchingDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchingDecisions.
     */
    cursor?: MatchingDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingDecisions.
     */
    skip?: number
    distinct?: MatchingDecisionScalarFieldEnum | MatchingDecisionScalarFieldEnum[]
  }

  /**
   * MatchingDecision create
   */
  export type MatchingDecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * The data needed to create a MatchingDecision.
     */
    data: XOR<MatchingDecisionCreateInput, MatchingDecisionUncheckedCreateInput>
  }

  /**
   * MatchingDecision createMany
   */
  export type MatchingDecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchingDecisions.
     */
    data: MatchingDecisionCreateManyInput | MatchingDecisionCreateManyInput[]
  }

  /**
   * MatchingDecision createManyAndReturn
   */
  export type MatchingDecisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MatchingDecisions.
     */
    data: MatchingDecisionCreateManyInput | MatchingDecisionCreateManyInput[]
  }

  /**
   * MatchingDecision update
   */
  export type MatchingDecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * The data needed to update a MatchingDecision.
     */
    data: XOR<MatchingDecisionUpdateInput, MatchingDecisionUncheckedUpdateInput>
    /**
     * Choose, which MatchingDecision to update.
     */
    where: MatchingDecisionWhereUniqueInput
  }

  /**
   * MatchingDecision updateMany
   */
  export type MatchingDecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchingDecisions.
     */
    data: XOR<MatchingDecisionUpdateManyMutationInput, MatchingDecisionUncheckedUpdateManyInput>
    /**
     * Filter which MatchingDecisions to update
     */
    where?: MatchingDecisionWhereInput
  }

  /**
   * MatchingDecision upsert
   */
  export type MatchingDecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * The filter to search for the MatchingDecision to update in case it exists.
     */
    where: MatchingDecisionWhereUniqueInput
    /**
     * In case the MatchingDecision found by the `where` argument doesn't exist, create a new MatchingDecision with this data.
     */
    create: XOR<MatchingDecisionCreateInput, MatchingDecisionUncheckedCreateInput>
    /**
     * In case the MatchingDecision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchingDecisionUpdateInput, MatchingDecisionUncheckedUpdateInput>
  }

  /**
   * MatchingDecision delete
   */
  export type MatchingDecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
    /**
     * Filter which MatchingDecision to delete.
     */
    where: MatchingDecisionWhereUniqueInput
  }

  /**
   * MatchingDecision deleteMany
   */
  export type MatchingDecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingDecisions to delete
     */
    where?: MatchingDecisionWhereInput
  }

  /**
   * MatchingDecision without action
   */
  export type MatchingDecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingDecision
     */
    select?: MatchingDecisionSelect<ExtArgs> | null
  }


  /**
   * Model AffiliateConversion
   */

  export type AggregateAffiliateConversion = {
    _count: AffiliateConversionCountAggregateOutputType | null
    _avg: AffiliateConversionAvgAggregateOutputType | null
    _sum: AffiliateConversionSumAggregateOutputType | null
    _min: AffiliateConversionMinAggregateOutputType | null
    _max: AffiliateConversionMaxAggregateOutputType | null
  }

  export type AffiliateConversionAvgAggregateOutputType = {
    orderValue: number | null
    commission: number | null
  }

  export type AffiliateConversionSumAggregateOutputType = {
    orderValue: number | null
    commission: number | null
  }

  export type AffiliateConversionMinAggregateOutputType = {
    id: string | null
    network: string | null
    storeId: string | null
    offerId: string | null
    clickId: string | null
    externalTransactionId: string | null
    status: string | null
    orderValue: number | null
    commission: number | null
    currency: string | null
    occurredAt: Date | null
    confirmedAt: Date | null
    rawPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AffiliateConversionMaxAggregateOutputType = {
    id: string | null
    network: string | null
    storeId: string | null
    offerId: string | null
    clickId: string | null
    externalTransactionId: string | null
    status: string | null
    orderValue: number | null
    commission: number | null
    currency: string | null
    occurredAt: Date | null
    confirmedAt: Date | null
    rawPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AffiliateConversionCountAggregateOutputType = {
    id: number
    network: number
    storeId: number
    offerId: number
    clickId: number
    externalTransactionId: number
    status: number
    orderValue: number
    commission: number
    currency: number
    occurredAt: number
    confirmedAt: number
    rawPayload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AffiliateConversionAvgAggregateInputType = {
    orderValue?: true
    commission?: true
  }

  export type AffiliateConversionSumAggregateInputType = {
    orderValue?: true
    commission?: true
  }

  export type AffiliateConversionMinAggregateInputType = {
    id?: true
    network?: true
    storeId?: true
    offerId?: true
    clickId?: true
    externalTransactionId?: true
    status?: true
    orderValue?: true
    commission?: true
    currency?: true
    occurredAt?: true
    confirmedAt?: true
    rawPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AffiliateConversionMaxAggregateInputType = {
    id?: true
    network?: true
    storeId?: true
    offerId?: true
    clickId?: true
    externalTransactionId?: true
    status?: true
    orderValue?: true
    commission?: true
    currency?: true
    occurredAt?: true
    confirmedAt?: true
    rawPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AffiliateConversionCountAggregateInputType = {
    id?: true
    network?: true
    storeId?: true
    offerId?: true
    clickId?: true
    externalTransactionId?: true
    status?: true
    orderValue?: true
    commission?: true
    currency?: true
    occurredAt?: true
    confirmedAt?: true
    rawPayload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AffiliateConversionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateConversion to aggregate.
     */
    where?: AffiliateConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateConversions to fetch.
     */
    orderBy?: AffiliateConversionOrderByWithRelationInput | AffiliateConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliateConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateConversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AffiliateConversions
    **/
    _count?: true | AffiliateConversionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliateConversionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliateConversionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliateConversionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliateConversionMaxAggregateInputType
  }

  export type GetAffiliateConversionAggregateType<T extends AffiliateConversionAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliateConversion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliateConversion[P]>
      : GetScalarType<T[P], AggregateAffiliateConversion[P]>
  }




  export type AffiliateConversionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateConversionWhereInput
    orderBy?: AffiliateConversionOrderByWithAggregationInput | AffiliateConversionOrderByWithAggregationInput[]
    by: AffiliateConversionScalarFieldEnum[] | AffiliateConversionScalarFieldEnum
    having?: AffiliateConversionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliateConversionCountAggregateInputType | true
    _avg?: AffiliateConversionAvgAggregateInputType
    _sum?: AffiliateConversionSumAggregateInputType
    _min?: AffiliateConversionMinAggregateInputType
    _max?: AffiliateConversionMaxAggregateInputType
  }

  export type AffiliateConversionGroupByOutputType = {
    id: string
    network: string
    storeId: string
    offerId: string | null
    clickId: string
    externalTransactionId: string | null
    status: string
    orderValue: number | null
    commission: number | null
    currency: string
    occurredAt: Date
    confirmedAt: Date | null
    rawPayload: string | null
    createdAt: Date
    updatedAt: Date
    _count: AffiliateConversionCountAggregateOutputType | null
    _avg: AffiliateConversionAvgAggregateOutputType | null
    _sum: AffiliateConversionSumAggregateOutputType | null
    _min: AffiliateConversionMinAggregateOutputType | null
    _max: AffiliateConversionMaxAggregateOutputType | null
  }

  type GetAffiliateConversionGroupByPayload<T extends AffiliateConversionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliateConversionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliateConversionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliateConversionGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliateConversionGroupByOutputType[P]>
        }
      >
    >


  export type AffiliateConversionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    storeId?: boolean
    offerId?: boolean
    clickId?: boolean
    externalTransactionId?: boolean
    status?: boolean
    orderValue?: boolean
    commission?: boolean
    currency?: boolean
    occurredAt?: boolean
    confirmedAt?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["affiliateConversion"]>

  export type AffiliateConversionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network?: boolean
    storeId?: boolean
    offerId?: boolean
    clickId?: boolean
    externalTransactionId?: boolean
    status?: boolean
    orderValue?: boolean
    commission?: boolean
    currency?: boolean
    occurredAt?: boolean
    confirmedAt?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["affiliateConversion"]>

  export type AffiliateConversionSelectScalar = {
    id?: boolean
    network?: boolean
    storeId?: boolean
    offerId?: boolean
    clickId?: boolean
    externalTransactionId?: boolean
    status?: boolean
    orderValue?: boolean
    commission?: boolean
    currency?: boolean
    occurredAt?: boolean
    confirmedAt?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AffiliateConversionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AffiliateConversion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      network: string
      storeId: string
      offerId: string | null
      clickId: string
      externalTransactionId: string | null
      status: string
      orderValue: number | null
      commission: number | null
      currency: string
      occurredAt: Date
      confirmedAt: Date | null
      rawPayload: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["affiliateConversion"]>
    composites: {}
  }

  type AffiliateConversionGetPayload<S extends boolean | null | undefined | AffiliateConversionDefaultArgs> = $Result.GetResult<Prisma.$AffiliateConversionPayload, S>

  type AffiliateConversionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AffiliateConversionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AffiliateConversionCountAggregateInputType | true
    }

  export interface AffiliateConversionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AffiliateConversion'], meta: { name: 'AffiliateConversion' } }
    /**
     * Find zero or one AffiliateConversion that matches the filter.
     * @param {AffiliateConversionFindUniqueArgs} args - Arguments to find a AffiliateConversion
     * @example
     * // Get one AffiliateConversion
     * const affiliateConversion = await prisma.affiliateConversion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AffiliateConversionFindUniqueArgs>(args: SelectSubset<T, AffiliateConversionFindUniqueArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AffiliateConversion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AffiliateConversionFindUniqueOrThrowArgs} args - Arguments to find a AffiliateConversion
     * @example
     * // Get one AffiliateConversion
     * const affiliateConversion = await prisma.affiliateConversion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AffiliateConversionFindUniqueOrThrowArgs>(args: SelectSubset<T, AffiliateConversionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AffiliateConversion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionFindFirstArgs} args - Arguments to find a AffiliateConversion
     * @example
     * // Get one AffiliateConversion
     * const affiliateConversion = await prisma.affiliateConversion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AffiliateConversionFindFirstArgs>(args?: SelectSubset<T, AffiliateConversionFindFirstArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AffiliateConversion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionFindFirstOrThrowArgs} args - Arguments to find a AffiliateConversion
     * @example
     * // Get one AffiliateConversion
     * const affiliateConversion = await prisma.affiliateConversion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AffiliateConversionFindFirstOrThrowArgs>(args?: SelectSubset<T, AffiliateConversionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AffiliateConversions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AffiliateConversions
     * const affiliateConversions = await prisma.affiliateConversion.findMany()
     * 
     * // Get first 10 AffiliateConversions
     * const affiliateConversions = await prisma.affiliateConversion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const affiliateConversionWithIdOnly = await prisma.affiliateConversion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AffiliateConversionFindManyArgs>(args?: SelectSubset<T, AffiliateConversionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AffiliateConversion.
     * @param {AffiliateConversionCreateArgs} args - Arguments to create a AffiliateConversion.
     * @example
     * // Create one AffiliateConversion
     * const AffiliateConversion = await prisma.affiliateConversion.create({
     *   data: {
     *     // ... data to create a AffiliateConversion
     *   }
     * })
     * 
     */
    create<T extends AffiliateConversionCreateArgs>(args: SelectSubset<T, AffiliateConversionCreateArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AffiliateConversions.
     * @param {AffiliateConversionCreateManyArgs} args - Arguments to create many AffiliateConversions.
     * @example
     * // Create many AffiliateConversions
     * const affiliateConversion = await prisma.affiliateConversion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AffiliateConversionCreateManyArgs>(args?: SelectSubset<T, AffiliateConversionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AffiliateConversions and returns the data saved in the database.
     * @param {AffiliateConversionCreateManyAndReturnArgs} args - Arguments to create many AffiliateConversions.
     * @example
     * // Create many AffiliateConversions
     * const affiliateConversion = await prisma.affiliateConversion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AffiliateConversions and only return the `id`
     * const affiliateConversionWithIdOnly = await prisma.affiliateConversion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AffiliateConversionCreateManyAndReturnArgs>(args?: SelectSubset<T, AffiliateConversionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AffiliateConversion.
     * @param {AffiliateConversionDeleteArgs} args - Arguments to delete one AffiliateConversion.
     * @example
     * // Delete one AffiliateConversion
     * const AffiliateConversion = await prisma.affiliateConversion.delete({
     *   where: {
     *     // ... filter to delete one AffiliateConversion
     *   }
     * })
     * 
     */
    delete<T extends AffiliateConversionDeleteArgs>(args: SelectSubset<T, AffiliateConversionDeleteArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AffiliateConversion.
     * @param {AffiliateConversionUpdateArgs} args - Arguments to update one AffiliateConversion.
     * @example
     * // Update one AffiliateConversion
     * const affiliateConversion = await prisma.affiliateConversion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AffiliateConversionUpdateArgs>(args: SelectSubset<T, AffiliateConversionUpdateArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AffiliateConversions.
     * @param {AffiliateConversionDeleteManyArgs} args - Arguments to filter AffiliateConversions to delete.
     * @example
     * // Delete a few AffiliateConversions
     * const { count } = await prisma.affiliateConversion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AffiliateConversionDeleteManyArgs>(args?: SelectSubset<T, AffiliateConversionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AffiliateConversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AffiliateConversions
     * const affiliateConversion = await prisma.affiliateConversion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AffiliateConversionUpdateManyArgs>(args: SelectSubset<T, AffiliateConversionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AffiliateConversion.
     * @param {AffiliateConversionUpsertArgs} args - Arguments to update or create a AffiliateConversion.
     * @example
     * // Update or create a AffiliateConversion
     * const affiliateConversion = await prisma.affiliateConversion.upsert({
     *   create: {
     *     // ... data to create a AffiliateConversion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AffiliateConversion we want to update
     *   }
     * })
     */
    upsert<T extends AffiliateConversionUpsertArgs>(args: SelectSubset<T, AffiliateConversionUpsertArgs<ExtArgs>>): Prisma__AffiliateConversionClient<$Result.GetResult<Prisma.$AffiliateConversionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AffiliateConversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionCountArgs} args - Arguments to filter AffiliateConversions to count.
     * @example
     * // Count the number of AffiliateConversions
     * const count = await prisma.affiliateConversion.count({
     *   where: {
     *     // ... the filter for the AffiliateConversions we want to count
     *   }
     * })
    **/
    count<T extends AffiliateConversionCountArgs>(
      args?: Subset<T, AffiliateConversionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliateConversionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AffiliateConversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AffiliateConversionAggregateArgs>(args: Subset<T, AffiliateConversionAggregateArgs>): Prisma.PrismaPromise<GetAffiliateConversionAggregateType<T>>

    /**
     * Group by AffiliateConversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateConversionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AffiliateConversionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliateConversionGroupByArgs['orderBy'] }
        : { orderBy?: AffiliateConversionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AffiliateConversionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliateConversionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AffiliateConversion model
   */
  readonly fields: AffiliateConversionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AffiliateConversion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliateConversionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AffiliateConversion model
   */ 
  interface AffiliateConversionFieldRefs {
    readonly id: FieldRef<"AffiliateConversion", 'String'>
    readonly network: FieldRef<"AffiliateConversion", 'String'>
    readonly storeId: FieldRef<"AffiliateConversion", 'String'>
    readonly offerId: FieldRef<"AffiliateConversion", 'String'>
    readonly clickId: FieldRef<"AffiliateConversion", 'String'>
    readonly externalTransactionId: FieldRef<"AffiliateConversion", 'String'>
    readonly status: FieldRef<"AffiliateConversion", 'String'>
    readonly orderValue: FieldRef<"AffiliateConversion", 'Float'>
    readonly commission: FieldRef<"AffiliateConversion", 'Float'>
    readonly currency: FieldRef<"AffiliateConversion", 'String'>
    readonly occurredAt: FieldRef<"AffiliateConversion", 'DateTime'>
    readonly confirmedAt: FieldRef<"AffiliateConversion", 'DateTime'>
    readonly rawPayload: FieldRef<"AffiliateConversion", 'String'>
    readonly createdAt: FieldRef<"AffiliateConversion", 'DateTime'>
    readonly updatedAt: FieldRef<"AffiliateConversion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AffiliateConversion findUnique
   */
  export type AffiliateConversionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * Filter, which AffiliateConversion to fetch.
     */
    where: AffiliateConversionWhereUniqueInput
  }

  /**
   * AffiliateConversion findUniqueOrThrow
   */
  export type AffiliateConversionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * Filter, which AffiliateConversion to fetch.
     */
    where: AffiliateConversionWhereUniqueInput
  }

  /**
   * AffiliateConversion findFirst
   */
  export type AffiliateConversionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * Filter, which AffiliateConversion to fetch.
     */
    where?: AffiliateConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateConversions to fetch.
     */
    orderBy?: AffiliateConversionOrderByWithRelationInput | AffiliateConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateConversions.
     */
    cursor?: AffiliateConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateConversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateConversions.
     */
    distinct?: AffiliateConversionScalarFieldEnum | AffiliateConversionScalarFieldEnum[]
  }

  /**
   * AffiliateConversion findFirstOrThrow
   */
  export type AffiliateConversionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * Filter, which AffiliateConversion to fetch.
     */
    where?: AffiliateConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateConversions to fetch.
     */
    orderBy?: AffiliateConversionOrderByWithRelationInput | AffiliateConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateConversions.
     */
    cursor?: AffiliateConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateConversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateConversions.
     */
    distinct?: AffiliateConversionScalarFieldEnum | AffiliateConversionScalarFieldEnum[]
  }

  /**
   * AffiliateConversion findMany
   */
  export type AffiliateConversionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * Filter, which AffiliateConversions to fetch.
     */
    where?: AffiliateConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateConversions to fetch.
     */
    orderBy?: AffiliateConversionOrderByWithRelationInput | AffiliateConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AffiliateConversions.
     */
    cursor?: AffiliateConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateConversions.
     */
    skip?: number
    distinct?: AffiliateConversionScalarFieldEnum | AffiliateConversionScalarFieldEnum[]
  }

  /**
   * AffiliateConversion create
   */
  export type AffiliateConversionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * The data needed to create a AffiliateConversion.
     */
    data: XOR<AffiliateConversionCreateInput, AffiliateConversionUncheckedCreateInput>
  }

  /**
   * AffiliateConversion createMany
   */
  export type AffiliateConversionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AffiliateConversions.
     */
    data: AffiliateConversionCreateManyInput | AffiliateConversionCreateManyInput[]
  }

  /**
   * AffiliateConversion createManyAndReturn
   */
  export type AffiliateConversionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AffiliateConversions.
     */
    data: AffiliateConversionCreateManyInput | AffiliateConversionCreateManyInput[]
  }

  /**
   * AffiliateConversion update
   */
  export type AffiliateConversionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * The data needed to update a AffiliateConversion.
     */
    data: XOR<AffiliateConversionUpdateInput, AffiliateConversionUncheckedUpdateInput>
    /**
     * Choose, which AffiliateConversion to update.
     */
    where: AffiliateConversionWhereUniqueInput
  }

  /**
   * AffiliateConversion updateMany
   */
  export type AffiliateConversionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AffiliateConversions.
     */
    data: XOR<AffiliateConversionUpdateManyMutationInput, AffiliateConversionUncheckedUpdateManyInput>
    /**
     * Filter which AffiliateConversions to update
     */
    where?: AffiliateConversionWhereInput
  }

  /**
   * AffiliateConversion upsert
   */
  export type AffiliateConversionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * The filter to search for the AffiliateConversion to update in case it exists.
     */
    where: AffiliateConversionWhereUniqueInput
    /**
     * In case the AffiliateConversion found by the `where` argument doesn't exist, create a new AffiliateConversion with this data.
     */
    create: XOR<AffiliateConversionCreateInput, AffiliateConversionUncheckedCreateInput>
    /**
     * In case the AffiliateConversion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliateConversionUpdateInput, AffiliateConversionUncheckedUpdateInput>
  }

  /**
   * AffiliateConversion delete
   */
  export type AffiliateConversionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
    /**
     * Filter which AffiliateConversion to delete.
     */
    where: AffiliateConversionWhereUniqueInput
  }

  /**
   * AffiliateConversion deleteMany
   */
  export type AffiliateConversionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateConversions to delete
     */
    where?: AffiliateConversionWhereInput
  }

  /**
   * AffiliateConversion without action
   */
  export type AffiliateConversionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateConversion
     */
    select?: AffiliateConversionSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    categoryId: 'categoryId',
    name: 'name',
    model: 'model',
    slug: 'slug',
    description: 'description',
    gender: 'gender',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    colorRaw: 'colorRaw',
    colorNormalized: 'colorNormalized',
    sizeRaw: 'sizeRaw',
    sizeValue: 'sizeValue',
    sizeSystem: 'sizeSystem',
    sku: 'sku',
    gtin: 'gtin',
    mpn: 'mpn',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    websiteUrl: 'websiteUrl',
    shopScore: 'shopScore',
    logoUrl: 'logoUrl',
    isAffiliate: 'isAffiliate',
    isActive: 'isActive',
    syncEnabled: 'syncEnabled',
    syncInterval: 'syncInterval',
    consecutiveFailures: 'consecutiveFailures',
    expirationDays: 'expirationDays',
    integrationType: 'integrationType',
    affiliateNetwork: 'affiliateNetwork',
    programId: 'programId',
    trackingEnabled: 'trackingEnabled',
    deeplinkTemplate: 'deeplinkTemplate',
    isDemo: 'isDemo',
    lastSuccessfulSyncAt: 'lastSuccessfulSyncAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const SyncRunScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    sourceType: 'sourceType',
    status: 'status',
    itemsReceived: 'itemsReceived',
    itemsProcessed: 'itemsProcessed',
    itemsCreated: 'itemsCreated',
    itemsUpdated: 'itemsUpdated',
    itemsFailed: 'itemsFailed',
    errorCount: 'errorCount',
    missingSkuCount: 'missingSkuCount',
    invalidPriceCount: 'invalidPriceCount',
    outOfStockCount: 'outOfStockCount',
    durationMs: 'durationMs',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt'
  };

  export type SyncRunScalarFieldEnum = (typeof SyncRunScalarFieldEnum)[keyof typeof SyncRunScalarFieldEnum]


  export const SyncErrorScalarFieldEnum: {
    id: 'id',
    syncRunId: 'syncRunId',
    storeId: 'storeId',
    externalId: 'externalId',
    errorCode: 'errorCode',
    message: 'message',
    rawPayload: 'rawPayload',
    createdAt: 'createdAt'
  };

  export type SyncErrorScalarFieldEnum = (typeof SyncErrorScalarFieldEnum)[keyof typeof SyncErrorScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    variantId: 'variantId',
    storeId: 'storeId',
    externalProductId: 'externalProductId',
    externalVariantId: 'externalVariantId',
    url: 'url',
    priceBase: 'priceBase',
    priceShipping: 'priceShipping',
    priceTotal: 'priceTotal',
    currency: 'currency',
    status: 'status',
    stockStatus: 'stockStatus',
    needsManualReview: 'needsManualReview',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    id: 'id',
    offerId: 'offerId',
    priceBase: 'priceBase',
    priceShipping: 'priceShipping',
    priceTotal: 'priceTotal',
    currency: 'currency',
    recordedAt: 'recordedAt'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const RawOfferScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    syncRunId: 'syncRunId',
    externalId: 'externalId',
    externalVariantId: 'externalVariantId',
    rawTitle: 'rawTitle',
    rawBrand: 'rawBrand',
    rawColor: 'rawColor',
    rawSize: 'rawSize',
    rawGtin: 'rawGtin',
    rawMpn: 'rawMpn',
    rawSku: 'rawSku',
    url: 'url',
    price: 'price',
    shipping: 'shipping',
    stock: 'stock',
    rawPayload: 'rawPayload',
    status: 'status',
    similarityScore: 'similarityScore',
    isDemo: 'isDemo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    confidence: 'confidence',
    matchedBy: 'matchedBy',
    matchingMethod: 'matchingMethod'
  };

  export type RawOfferScalarFieldEnum = (typeof RawOfferScalarFieldEnum)[keyof typeof RawOfferScalarFieldEnum]


  export const AnalyticsEventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    sessionId: 'sessionId',
    productId: 'productId',
    variantId: 'variantId',
    offerId: 'offerId',
    storeId: 'storeId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AnalyticsEventScalarFieldEnum = (typeof AnalyticsEventScalarFieldEnum)[keyof typeof AnalyticsEventScalarFieldEnum]


  export const MatchingDecisionScalarFieldEnum: {
    id: 'id',
    rawOfferId: 'rawOfferId',
    candidateProductId: 'candidateProductId',
    confidenceScore: 'confidenceScore',
    confidenceLevel: 'confidenceLevel',
    signals: 'signals',
    reason: 'reason',
    decision: 'decision',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt'
  };

  export type MatchingDecisionScalarFieldEnum = (typeof MatchingDecisionScalarFieldEnum)[keyof typeof MatchingDecisionScalarFieldEnum]


  export const AffiliateConversionScalarFieldEnum: {
    id: 'id',
    network: 'network',
    storeId: 'storeId',
    offerId: 'offerId',
    clickId: 'clickId',
    externalTransactionId: 'externalTransactionId',
    status: 'status',
    orderValue: 'orderValue',
    commission: 'commission',
    currency: 'currency',
    occurredAt: 'occurredAt',
    confirmedAt: 'confirmedAt',
    rawPayload: 'rawPayload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AffiliateConversionScalarFieldEnum = (typeof AffiliateConversionScalarFieldEnum)[keyof typeof AffiliateConversionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name" | "slug">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    slug?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    model?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    gender?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    variants?: VariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    name?: SortOrder
    model?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    variants?: VariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    brandId?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    model?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    gender?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    variants?: VariantListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    name?: SortOrder
    model?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    brandId?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    model?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: StringFilter<"Variant"> | string
    productId?: StringFilter<"Variant"> | string
    colorRaw?: StringNullableFilter<"Variant"> | string | null
    colorNormalized?: StringNullableFilter<"Variant"> | string | null
    sizeRaw?: StringNullableFilter<"Variant"> | string | null
    sizeValue?: StringNullableFilter<"Variant"> | string | null
    sizeSystem?: StringNullableFilter<"Variant"> | string | null
    sku?: StringNullableFilter<"Variant"> | string | null
    gtin?: StringNullableFilter<"Variant"> | string | null
    mpn?: StringNullableFilter<"Variant"> | string | null
    imageUrl?: StringNullableFilter<"Variant"> | string | null
    createdAt?: DateTimeFilter<"Variant"> | Date | string
    updatedAt?: DateTimeFilter<"Variant"> | Date | string
    offers?: OfferListRelationFilter
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    colorRaw?: SortOrderInput | SortOrder
    colorNormalized?: SortOrderInput | SortOrder
    sizeRaw?: SortOrderInput | SortOrder
    sizeValue?: SortOrderInput | SortOrder
    sizeSystem?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    gtin?: SortOrderInput | SortOrder
    mpn?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    offers?: OfferOrderByRelationAggregateInput
    product?: ProductOrderByWithRelationInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_sizeValue_sizeSystem_colorNormalized?: VariantProductIdSizeValueSizeSystemColorNormalizedCompoundUniqueInput
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    productId?: StringFilter<"Variant"> | string
    colorRaw?: StringNullableFilter<"Variant"> | string | null
    colorNormalized?: StringNullableFilter<"Variant"> | string | null
    sizeRaw?: StringNullableFilter<"Variant"> | string | null
    sizeValue?: StringNullableFilter<"Variant"> | string | null
    sizeSystem?: StringNullableFilter<"Variant"> | string | null
    sku?: StringNullableFilter<"Variant"> | string | null
    gtin?: StringNullableFilter<"Variant"> | string | null
    mpn?: StringNullableFilter<"Variant"> | string | null
    imageUrl?: StringNullableFilter<"Variant"> | string | null
    createdAt?: DateTimeFilter<"Variant"> | Date | string
    updatedAt?: DateTimeFilter<"Variant"> | Date | string
    offers?: OfferListRelationFilter
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "productId_sizeValue_sizeSystem_colorNormalized">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    colorRaw?: SortOrderInput | SortOrder
    colorNormalized?: SortOrderInput | SortOrder
    sizeRaw?: SortOrderInput | SortOrder
    sizeValue?: SortOrderInput | SortOrder
    sizeSystem?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    gtin?: SortOrderInput | SortOrder
    mpn?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Variant"> | string
    productId?: StringWithAggregatesFilter<"Variant"> | string
    colorRaw?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    colorNormalized?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    sizeRaw?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    sizeValue?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    sizeSystem?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    sku?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    gtin?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    mpn?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Variant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Variant"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    slug?: StringFilter<"Store"> | string
    websiteUrl?: StringFilter<"Store"> | string
    shopScore?: IntFilter<"Store"> | number
    logoUrl?: StringNullableFilter<"Store"> | string | null
    isAffiliate?: BoolFilter<"Store"> | boolean
    isActive?: BoolFilter<"Store"> | boolean
    syncEnabled?: BoolFilter<"Store"> | boolean
    syncInterval?: IntFilter<"Store"> | number
    consecutiveFailures?: IntFilter<"Store"> | number
    expirationDays?: IntFilter<"Store"> | number
    integrationType?: StringFilter<"Store"> | string
    affiliateNetwork?: StringNullableFilter<"Store"> | string | null
    programId?: StringNullableFilter<"Store"> | string | null
    trackingEnabled?: BoolFilter<"Store"> | boolean
    deeplinkTemplate?: StringNullableFilter<"Store"> | string | null
    isDemo?: BoolFilter<"Store"> | boolean
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"Store"> | Date | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    offers?: OfferListRelationFilter
    rawOffers?: RawOfferListRelationFilter
    syncErrors?: SyncErrorListRelationFilter
    syncRuns?: SyncRunListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    websiteUrl?: SortOrder
    shopScore?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isAffiliate?: SortOrder
    isActive?: SortOrder
    syncEnabled?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
    integrationType?: SortOrder
    affiliateNetwork?: SortOrderInput | SortOrder
    programId?: SortOrderInput | SortOrder
    trackingEnabled?: SortOrder
    deeplinkTemplate?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    offers?: OfferOrderByRelationAggregateInput
    rawOffers?: RawOfferOrderByRelationAggregateInput
    syncErrors?: SyncErrorOrderByRelationAggregateInput
    syncRuns?: SyncRunOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    websiteUrl?: StringFilter<"Store"> | string
    shopScore?: IntFilter<"Store"> | number
    logoUrl?: StringNullableFilter<"Store"> | string | null
    isAffiliate?: BoolFilter<"Store"> | boolean
    isActive?: BoolFilter<"Store"> | boolean
    syncEnabled?: BoolFilter<"Store"> | boolean
    syncInterval?: IntFilter<"Store"> | number
    consecutiveFailures?: IntFilter<"Store"> | number
    expirationDays?: IntFilter<"Store"> | number
    integrationType?: StringFilter<"Store"> | string
    affiliateNetwork?: StringNullableFilter<"Store"> | string | null
    programId?: StringNullableFilter<"Store"> | string | null
    trackingEnabled?: BoolFilter<"Store"> | boolean
    deeplinkTemplate?: StringNullableFilter<"Store"> | string | null
    isDemo?: BoolFilter<"Store"> | boolean
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"Store"> | Date | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    offers?: OfferListRelationFilter
    rawOffers?: RawOfferListRelationFilter
    syncErrors?: SyncErrorListRelationFilter
    syncRuns?: SyncRunListRelationFilter
  }, "id" | "slug">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    websiteUrl?: SortOrder
    shopScore?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isAffiliate?: SortOrder
    isActive?: SortOrder
    syncEnabled?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
    integrationType?: SortOrder
    affiliateNetwork?: SortOrderInput | SortOrder
    programId?: SortOrderInput | SortOrder
    trackingEnabled?: SortOrder
    deeplinkTemplate?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    slug?: StringWithAggregatesFilter<"Store"> | string
    websiteUrl?: StringWithAggregatesFilter<"Store"> | string
    shopScore?: IntWithAggregatesFilter<"Store"> | number
    logoUrl?: StringNullableWithAggregatesFilter<"Store"> | string | null
    isAffiliate?: BoolWithAggregatesFilter<"Store"> | boolean
    isActive?: BoolWithAggregatesFilter<"Store"> | boolean
    syncEnabled?: BoolWithAggregatesFilter<"Store"> | boolean
    syncInterval?: IntWithAggregatesFilter<"Store"> | number
    consecutiveFailures?: IntWithAggregatesFilter<"Store"> | number
    expirationDays?: IntWithAggregatesFilter<"Store"> | number
    integrationType?: StringWithAggregatesFilter<"Store"> | string
    affiliateNetwork?: StringNullableWithAggregatesFilter<"Store"> | string | null
    programId?: StringNullableWithAggregatesFilter<"Store"> | string | null
    trackingEnabled?: BoolWithAggregatesFilter<"Store"> | boolean
    deeplinkTemplate?: StringNullableWithAggregatesFilter<"Store"> | string | null
    isDemo?: BoolWithAggregatesFilter<"Store"> | boolean
    lastSuccessfulSyncAt?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type SyncRunWhereInput = {
    AND?: SyncRunWhereInput | SyncRunWhereInput[]
    OR?: SyncRunWhereInput[]
    NOT?: SyncRunWhereInput | SyncRunWhereInput[]
    id?: StringFilter<"SyncRun"> | string
    storeId?: StringFilter<"SyncRun"> | string
    sourceType?: StringFilter<"SyncRun"> | string
    status?: StringFilter<"SyncRun"> | string
    itemsReceived?: IntFilter<"SyncRun"> | number
    itemsProcessed?: IntFilter<"SyncRun"> | number
    itemsCreated?: IntFilter<"SyncRun"> | number
    itemsUpdated?: IntFilter<"SyncRun"> | number
    itemsFailed?: IntFilter<"SyncRun"> | number
    errorCount?: IntFilter<"SyncRun"> | number
    missingSkuCount?: IntFilter<"SyncRun"> | number
    invalidPriceCount?: IntFilter<"SyncRun"> | number
    outOfStockCount?: IntFilter<"SyncRun"> | number
    durationMs?: IntNullableFilter<"SyncRun"> | number | null
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    finishedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    syncErrors?: SyncErrorListRelationFilter
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type SyncRunOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    syncErrors?: SyncErrorOrderByRelationAggregateInput
    store?: StoreOrderByWithRelationInput
  }

  export type SyncRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncRunWhereInput | SyncRunWhereInput[]
    OR?: SyncRunWhereInput[]
    NOT?: SyncRunWhereInput | SyncRunWhereInput[]
    storeId?: StringFilter<"SyncRun"> | string
    sourceType?: StringFilter<"SyncRun"> | string
    status?: StringFilter<"SyncRun"> | string
    itemsReceived?: IntFilter<"SyncRun"> | number
    itemsProcessed?: IntFilter<"SyncRun"> | number
    itemsCreated?: IntFilter<"SyncRun"> | number
    itemsUpdated?: IntFilter<"SyncRun"> | number
    itemsFailed?: IntFilter<"SyncRun"> | number
    errorCount?: IntFilter<"SyncRun"> | number
    missingSkuCount?: IntFilter<"SyncRun"> | number
    invalidPriceCount?: IntFilter<"SyncRun"> | number
    outOfStockCount?: IntFilter<"SyncRun"> | number
    durationMs?: IntNullableFilter<"SyncRun"> | number | null
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    finishedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    syncErrors?: SyncErrorListRelationFilter
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id">

  export type SyncRunOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: SyncRunCountOrderByAggregateInput
    _avg?: SyncRunAvgOrderByAggregateInput
    _max?: SyncRunMaxOrderByAggregateInput
    _min?: SyncRunMinOrderByAggregateInput
    _sum?: SyncRunSumOrderByAggregateInput
  }

  export type SyncRunScalarWhereWithAggregatesInput = {
    AND?: SyncRunScalarWhereWithAggregatesInput | SyncRunScalarWhereWithAggregatesInput[]
    OR?: SyncRunScalarWhereWithAggregatesInput[]
    NOT?: SyncRunScalarWhereWithAggregatesInput | SyncRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncRun"> | string
    storeId?: StringWithAggregatesFilter<"SyncRun"> | string
    sourceType?: StringWithAggregatesFilter<"SyncRun"> | string
    status?: StringWithAggregatesFilter<"SyncRun"> | string
    itemsReceived?: IntWithAggregatesFilter<"SyncRun"> | number
    itemsProcessed?: IntWithAggregatesFilter<"SyncRun"> | number
    itemsCreated?: IntWithAggregatesFilter<"SyncRun"> | number
    itemsUpdated?: IntWithAggregatesFilter<"SyncRun"> | number
    itemsFailed?: IntWithAggregatesFilter<"SyncRun"> | number
    errorCount?: IntWithAggregatesFilter<"SyncRun"> | number
    missingSkuCount?: IntWithAggregatesFilter<"SyncRun"> | number
    invalidPriceCount?: IntWithAggregatesFilter<"SyncRun"> | number
    outOfStockCount?: IntWithAggregatesFilter<"SyncRun"> | number
    durationMs?: IntNullableWithAggregatesFilter<"SyncRun"> | number | null
    startedAt?: DateTimeWithAggregatesFilter<"SyncRun"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"SyncRun"> | Date | string | null
  }

  export type SyncErrorWhereInput = {
    AND?: SyncErrorWhereInput | SyncErrorWhereInput[]
    OR?: SyncErrorWhereInput[]
    NOT?: SyncErrorWhereInput | SyncErrorWhereInput[]
    id?: StringFilter<"SyncError"> | string
    syncRunId?: StringFilter<"SyncError"> | string
    storeId?: StringFilter<"SyncError"> | string
    externalId?: StringNullableFilter<"SyncError"> | string | null
    errorCode?: StringFilter<"SyncError"> | string
    message?: StringFilter<"SyncError"> | string
    rawPayload?: StringNullableFilter<"SyncError"> | string | null
    createdAt?: DateTimeFilter<"SyncError"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    syncRun?: XOR<SyncRunRelationFilter, SyncRunWhereInput>
  }

  export type SyncErrorOrderByWithRelationInput = {
    id?: SortOrder
    syncRunId?: SortOrder
    storeId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    syncRun?: SyncRunOrderByWithRelationInput
  }

  export type SyncErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncErrorWhereInput | SyncErrorWhereInput[]
    OR?: SyncErrorWhereInput[]
    NOT?: SyncErrorWhereInput | SyncErrorWhereInput[]
    syncRunId?: StringFilter<"SyncError"> | string
    storeId?: StringFilter<"SyncError"> | string
    externalId?: StringNullableFilter<"SyncError"> | string | null
    errorCode?: StringFilter<"SyncError"> | string
    message?: StringFilter<"SyncError"> | string
    rawPayload?: StringNullableFilter<"SyncError"> | string | null
    createdAt?: DateTimeFilter<"SyncError"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    syncRun?: XOR<SyncRunRelationFilter, SyncRunWhereInput>
  }, "id">

  export type SyncErrorOrderByWithAggregationInput = {
    id?: SortOrder
    syncRunId?: SortOrder
    storeId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SyncErrorCountOrderByAggregateInput
    _max?: SyncErrorMaxOrderByAggregateInput
    _min?: SyncErrorMinOrderByAggregateInput
  }

  export type SyncErrorScalarWhereWithAggregatesInput = {
    AND?: SyncErrorScalarWhereWithAggregatesInput | SyncErrorScalarWhereWithAggregatesInput[]
    OR?: SyncErrorScalarWhereWithAggregatesInput[]
    NOT?: SyncErrorScalarWhereWithAggregatesInput | SyncErrorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncError"> | string
    syncRunId?: StringWithAggregatesFilter<"SyncError"> | string
    storeId?: StringWithAggregatesFilter<"SyncError"> | string
    externalId?: StringNullableWithAggregatesFilter<"SyncError"> | string | null
    errorCode?: StringWithAggregatesFilter<"SyncError"> | string
    message?: StringWithAggregatesFilter<"SyncError"> | string
    rawPayload?: StringNullableWithAggregatesFilter<"SyncError"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SyncError"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    variantId?: StringFilter<"Offer"> | string
    storeId?: StringFilter<"Offer"> | string
    externalProductId?: StringFilter<"Offer"> | string
    externalVariantId?: StringFilter<"Offer"> | string
    url?: StringFilter<"Offer"> | string
    priceBase?: FloatFilter<"Offer"> | number
    priceShipping?: FloatNullableFilter<"Offer"> | number | null
    priceTotal?: FloatNullableFilter<"Offer"> | number | null
    currency?: StringFilter<"Offer"> | string
    status?: StringFilter<"Offer"> | string
    stockStatus?: StringFilter<"Offer"> | string
    needsManualReview?: BoolFilter<"Offer"> | boolean
    lastSeenAt?: DateTimeFilter<"Offer"> | Date | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    variant?: XOR<VariantRelationFilter, VariantWhereInput>
    priceHistory?: PriceHistoryListRelationFilter
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    variantId?: SortOrder
    storeId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    url?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrderInput | SortOrder
    priceTotal?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    stockStatus?: SortOrder
    needsManualReview?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    variant?: VariantOrderByWithRelationInput
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storeId_externalProductId_externalVariantId?: OfferStoreIdExternalProductIdExternalVariantIdCompoundUniqueInput
    storeId_variantId?: OfferStoreIdVariantIdCompoundUniqueInput
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    variantId?: StringFilter<"Offer"> | string
    storeId?: StringFilter<"Offer"> | string
    externalProductId?: StringFilter<"Offer"> | string
    externalVariantId?: StringFilter<"Offer"> | string
    url?: StringFilter<"Offer"> | string
    priceBase?: FloatFilter<"Offer"> | number
    priceShipping?: FloatNullableFilter<"Offer"> | number | null
    priceTotal?: FloatNullableFilter<"Offer"> | number | null
    currency?: StringFilter<"Offer"> | string
    status?: StringFilter<"Offer"> | string
    stockStatus?: StringFilter<"Offer"> | string
    needsManualReview?: BoolFilter<"Offer"> | boolean
    lastSeenAt?: DateTimeFilter<"Offer"> | Date | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    variant?: XOR<VariantRelationFilter, VariantWhereInput>
    priceHistory?: PriceHistoryListRelationFilter
  }, "id" | "storeId_externalProductId_externalVariantId" | "storeId_variantId">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    variantId?: SortOrder
    storeId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    url?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrderInput | SortOrder
    priceTotal?: SortOrderInput | SortOrder
    currency?: SortOrder
    status?: SortOrder
    stockStatus?: SortOrder
    needsManualReview?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    variantId?: StringWithAggregatesFilter<"Offer"> | string
    storeId?: StringWithAggregatesFilter<"Offer"> | string
    externalProductId?: StringWithAggregatesFilter<"Offer"> | string
    externalVariantId?: StringWithAggregatesFilter<"Offer"> | string
    url?: StringWithAggregatesFilter<"Offer"> | string
    priceBase?: FloatWithAggregatesFilter<"Offer"> | number
    priceShipping?: FloatNullableWithAggregatesFilter<"Offer"> | number | null
    priceTotal?: FloatNullableWithAggregatesFilter<"Offer"> | number | null
    currency?: StringWithAggregatesFilter<"Offer"> | string
    status?: StringWithAggregatesFilter<"Offer"> | string
    stockStatus?: StringWithAggregatesFilter<"Offer"> | string
    needsManualReview?: BoolWithAggregatesFilter<"Offer"> | boolean
    lastSeenAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    id?: StringFilter<"PriceHistory"> | string
    offerId?: StringFilter<"PriceHistory"> | string
    priceBase?: FloatFilter<"PriceHistory"> | number
    priceShipping?: FloatNullableFilter<"PriceHistory"> | number | null
    priceTotal?: FloatNullableFilter<"PriceHistory"> | number | null
    currency?: StringFilter<"PriceHistory"> | string
    recordedAt?: DateTimeFilter<"PriceHistory"> | Date | string
    offer?: XOR<OfferRelationFilter, OfferWhereInput>
  }

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    offerId?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrderInput | SortOrder
    priceTotal?: SortOrderInput | SortOrder
    currency?: SortOrder
    recordedAt?: SortOrder
    offer?: OfferOrderByWithRelationInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    offerId?: StringFilter<"PriceHistory"> | string
    priceBase?: FloatFilter<"PriceHistory"> | number
    priceShipping?: FloatNullableFilter<"PriceHistory"> | number | null
    priceTotal?: FloatNullableFilter<"PriceHistory"> | number | null
    currency?: StringFilter<"PriceHistory"> | string
    recordedAt?: DateTimeFilter<"PriceHistory"> | Date | string
    offer?: XOR<OfferRelationFilter, OfferWhereInput>
  }, "id">

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    offerId?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrderInput | SortOrder
    priceTotal?: SortOrderInput | SortOrder
    currency?: SortOrder
    recordedAt?: SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceHistory"> | string
    offerId?: StringWithAggregatesFilter<"PriceHistory"> | string
    priceBase?: FloatWithAggregatesFilter<"PriceHistory"> | number
    priceShipping?: FloatNullableWithAggregatesFilter<"PriceHistory"> | number | null
    priceTotal?: FloatNullableWithAggregatesFilter<"PriceHistory"> | number | null
    currency?: StringWithAggregatesFilter<"PriceHistory"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
  }

  export type RawOfferWhereInput = {
    AND?: RawOfferWhereInput | RawOfferWhereInput[]
    OR?: RawOfferWhereInput[]
    NOT?: RawOfferWhereInput | RawOfferWhereInput[]
    id?: StringFilter<"RawOffer"> | string
    storeId?: StringFilter<"RawOffer"> | string
    syncRunId?: StringNullableFilter<"RawOffer"> | string | null
    externalId?: StringFilter<"RawOffer"> | string
    externalVariantId?: StringFilter<"RawOffer"> | string
    rawTitle?: StringFilter<"RawOffer"> | string
    rawBrand?: StringNullableFilter<"RawOffer"> | string | null
    rawColor?: StringNullableFilter<"RawOffer"> | string | null
    rawSize?: StringNullableFilter<"RawOffer"> | string | null
    rawGtin?: StringNullableFilter<"RawOffer"> | string | null
    rawMpn?: StringNullableFilter<"RawOffer"> | string | null
    rawSku?: StringNullableFilter<"RawOffer"> | string | null
    url?: StringFilter<"RawOffer"> | string
    price?: FloatFilter<"RawOffer"> | number
    shipping?: FloatNullableFilter<"RawOffer"> | number | null
    stock?: StringNullableFilter<"RawOffer"> | string | null
    rawPayload?: StringFilter<"RawOffer"> | string
    status?: StringFilter<"RawOffer"> | string
    similarityScore?: FloatNullableFilter<"RawOffer"> | number | null
    isDemo?: BoolFilter<"RawOffer"> | boolean
    createdAt?: DateTimeFilter<"RawOffer"> | Date | string
    updatedAt?: DateTimeFilter<"RawOffer"> | Date | string
    confidence?: StringNullableFilter<"RawOffer"> | string | null
    matchedBy?: StringNullableFilter<"RawOffer"> | string | null
    matchingMethod?: StringNullableFilter<"RawOffer"> | string | null
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type RawOfferOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    syncRunId?: SortOrderInput | SortOrder
    externalId?: SortOrder
    externalVariantId?: SortOrder
    rawTitle?: SortOrder
    rawBrand?: SortOrderInput | SortOrder
    rawColor?: SortOrderInput | SortOrder
    rawSize?: SortOrderInput | SortOrder
    rawGtin?: SortOrderInput | SortOrder
    rawMpn?: SortOrderInput | SortOrder
    rawSku?: SortOrderInput | SortOrder
    url?: SortOrder
    price?: SortOrder
    shipping?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    rawPayload?: SortOrder
    status?: SortOrder
    similarityScore?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confidence?: SortOrderInput | SortOrder
    matchedBy?: SortOrderInput | SortOrder
    matchingMethod?: SortOrderInput | SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type RawOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storeId_externalId_externalVariantId?: RawOfferStoreIdExternalIdExternalVariantIdCompoundUniqueInput
    AND?: RawOfferWhereInput | RawOfferWhereInput[]
    OR?: RawOfferWhereInput[]
    NOT?: RawOfferWhereInput | RawOfferWhereInput[]
    storeId?: StringFilter<"RawOffer"> | string
    syncRunId?: StringNullableFilter<"RawOffer"> | string | null
    externalId?: StringFilter<"RawOffer"> | string
    externalVariantId?: StringFilter<"RawOffer"> | string
    rawTitle?: StringFilter<"RawOffer"> | string
    rawBrand?: StringNullableFilter<"RawOffer"> | string | null
    rawColor?: StringNullableFilter<"RawOffer"> | string | null
    rawSize?: StringNullableFilter<"RawOffer"> | string | null
    rawGtin?: StringNullableFilter<"RawOffer"> | string | null
    rawMpn?: StringNullableFilter<"RawOffer"> | string | null
    rawSku?: StringNullableFilter<"RawOffer"> | string | null
    url?: StringFilter<"RawOffer"> | string
    price?: FloatFilter<"RawOffer"> | number
    shipping?: FloatNullableFilter<"RawOffer"> | number | null
    stock?: StringNullableFilter<"RawOffer"> | string | null
    rawPayload?: StringFilter<"RawOffer"> | string
    status?: StringFilter<"RawOffer"> | string
    similarityScore?: FloatNullableFilter<"RawOffer"> | number | null
    isDemo?: BoolFilter<"RawOffer"> | boolean
    createdAt?: DateTimeFilter<"RawOffer"> | Date | string
    updatedAt?: DateTimeFilter<"RawOffer"> | Date | string
    confidence?: StringNullableFilter<"RawOffer"> | string | null
    matchedBy?: StringNullableFilter<"RawOffer"> | string | null
    matchingMethod?: StringNullableFilter<"RawOffer"> | string | null
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id" | "storeId_externalId_externalVariantId">

  export type RawOfferOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    syncRunId?: SortOrderInput | SortOrder
    externalId?: SortOrder
    externalVariantId?: SortOrder
    rawTitle?: SortOrder
    rawBrand?: SortOrderInput | SortOrder
    rawColor?: SortOrderInput | SortOrder
    rawSize?: SortOrderInput | SortOrder
    rawGtin?: SortOrderInput | SortOrder
    rawMpn?: SortOrderInput | SortOrder
    rawSku?: SortOrderInput | SortOrder
    url?: SortOrder
    price?: SortOrder
    shipping?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    rawPayload?: SortOrder
    status?: SortOrder
    similarityScore?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confidence?: SortOrderInput | SortOrder
    matchedBy?: SortOrderInput | SortOrder
    matchingMethod?: SortOrderInput | SortOrder
    _count?: RawOfferCountOrderByAggregateInput
    _avg?: RawOfferAvgOrderByAggregateInput
    _max?: RawOfferMaxOrderByAggregateInput
    _min?: RawOfferMinOrderByAggregateInput
    _sum?: RawOfferSumOrderByAggregateInput
  }

  export type RawOfferScalarWhereWithAggregatesInput = {
    AND?: RawOfferScalarWhereWithAggregatesInput | RawOfferScalarWhereWithAggregatesInput[]
    OR?: RawOfferScalarWhereWithAggregatesInput[]
    NOT?: RawOfferScalarWhereWithAggregatesInput | RawOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RawOffer"> | string
    storeId?: StringWithAggregatesFilter<"RawOffer"> | string
    syncRunId?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    externalId?: StringWithAggregatesFilter<"RawOffer"> | string
    externalVariantId?: StringWithAggregatesFilter<"RawOffer"> | string
    rawTitle?: StringWithAggregatesFilter<"RawOffer"> | string
    rawBrand?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    rawColor?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    rawSize?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    rawGtin?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    rawMpn?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    rawSku?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    url?: StringWithAggregatesFilter<"RawOffer"> | string
    price?: FloatWithAggregatesFilter<"RawOffer"> | number
    shipping?: FloatNullableWithAggregatesFilter<"RawOffer"> | number | null
    stock?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    rawPayload?: StringWithAggregatesFilter<"RawOffer"> | string
    status?: StringWithAggregatesFilter<"RawOffer"> | string
    similarityScore?: FloatNullableWithAggregatesFilter<"RawOffer"> | number | null
    isDemo?: BoolWithAggregatesFilter<"RawOffer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RawOffer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RawOffer"> | Date | string
    confidence?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    matchedBy?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
    matchingMethod?: StringNullableWithAggregatesFilter<"RawOffer"> | string | null
  }

  export type AnalyticsEventWhereInput = {
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    id?: StringFilter<"AnalyticsEvent"> | string
    type?: StringFilter<"AnalyticsEvent"> | string
    sessionId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    productId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    variantId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    offerId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    storeId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    metadata?: StringNullableFilter<"AnalyticsEvent"> | string | null
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }

  export type AnalyticsEventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    offerId?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    type?: StringFilter<"AnalyticsEvent"> | string
    sessionId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    productId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    variantId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    offerId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    storeId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    metadata?: StringNullableFilter<"AnalyticsEvent"> | string | null
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }, "id">

  export type AnalyticsEventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    offerId?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsEventCountOrderByAggregateInput
    _max?: AnalyticsEventMaxOrderByAggregateInput
    _min?: AnalyticsEventMinOrderByAggregateInput
  }

  export type AnalyticsEventScalarWhereWithAggregatesInput = {
    AND?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    OR?: AnalyticsEventScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    type?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    sessionId?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    productId?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    variantId?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    offerId?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    storeId?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsEvent"> | Date | string
  }

  export type MatchingDecisionWhereInput = {
    AND?: MatchingDecisionWhereInput | MatchingDecisionWhereInput[]
    OR?: MatchingDecisionWhereInput[]
    NOT?: MatchingDecisionWhereInput | MatchingDecisionWhereInput[]
    id?: StringFilter<"MatchingDecision"> | string
    rawOfferId?: StringFilter<"MatchingDecision"> | string
    candidateProductId?: StringNullableFilter<"MatchingDecision"> | string | null
    confidenceScore?: FloatNullableFilter<"MatchingDecision"> | number | null
    confidenceLevel?: StringFilter<"MatchingDecision"> | string
    signals?: StringFilter<"MatchingDecision"> | string
    reason?: StringFilter<"MatchingDecision"> | string
    decision?: StringFilter<"MatchingDecision"> | string
    reviewedBy?: StringNullableFilter<"MatchingDecision"> | string | null
    reviewedAt?: DateTimeNullableFilter<"MatchingDecision"> | Date | string | null
    createdAt?: DateTimeFilter<"MatchingDecision"> | Date | string
  }

  export type MatchingDecisionOrderByWithRelationInput = {
    id?: SortOrder
    rawOfferId?: SortOrder
    candidateProductId?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    confidenceLevel?: SortOrder
    signals?: SortOrder
    reason?: SortOrder
    decision?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type MatchingDecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchingDecisionWhereInput | MatchingDecisionWhereInput[]
    OR?: MatchingDecisionWhereInput[]
    NOT?: MatchingDecisionWhereInput | MatchingDecisionWhereInput[]
    rawOfferId?: StringFilter<"MatchingDecision"> | string
    candidateProductId?: StringNullableFilter<"MatchingDecision"> | string | null
    confidenceScore?: FloatNullableFilter<"MatchingDecision"> | number | null
    confidenceLevel?: StringFilter<"MatchingDecision"> | string
    signals?: StringFilter<"MatchingDecision"> | string
    reason?: StringFilter<"MatchingDecision"> | string
    decision?: StringFilter<"MatchingDecision"> | string
    reviewedBy?: StringNullableFilter<"MatchingDecision"> | string | null
    reviewedAt?: DateTimeNullableFilter<"MatchingDecision"> | Date | string | null
    createdAt?: DateTimeFilter<"MatchingDecision"> | Date | string
  }, "id">

  export type MatchingDecisionOrderByWithAggregationInput = {
    id?: SortOrder
    rawOfferId?: SortOrder
    candidateProductId?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    confidenceLevel?: SortOrder
    signals?: SortOrder
    reason?: SortOrder
    decision?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MatchingDecisionCountOrderByAggregateInput
    _avg?: MatchingDecisionAvgOrderByAggregateInput
    _max?: MatchingDecisionMaxOrderByAggregateInput
    _min?: MatchingDecisionMinOrderByAggregateInput
    _sum?: MatchingDecisionSumOrderByAggregateInput
  }

  export type MatchingDecisionScalarWhereWithAggregatesInput = {
    AND?: MatchingDecisionScalarWhereWithAggregatesInput | MatchingDecisionScalarWhereWithAggregatesInput[]
    OR?: MatchingDecisionScalarWhereWithAggregatesInput[]
    NOT?: MatchingDecisionScalarWhereWithAggregatesInput | MatchingDecisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchingDecision"> | string
    rawOfferId?: StringWithAggregatesFilter<"MatchingDecision"> | string
    candidateProductId?: StringNullableWithAggregatesFilter<"MatchingDecision"> | string | null
    confidenceScore?: FloatNullableWithAggregatesFilter<"MatchingDecision"> | number | null
    confidenceLevel?: StringWithAggregatesFilter<"MatchingDecision"> | string
    signals?: StringWithAggregatesFilter<"MatchingDecision"> | string
    reason?: StringWithAggregatesFilter<"MatchingDecision"> | string
    decision?: StringWithAggregatesFilter<"MatchingDecision"> | string
    reviewedBy?: StringNullableWithAggregatesFilter<"MatchingDecision"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"MatchingDecision"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchingDecision"> | Date | string
  }

  export type AffiliateConversionWhereInput = {
    AND?: AffiliateConversionWhereInput | AffiliateConversionWhereInput[]
    OR?: AffiliateConversionWhereInput[]
    NOT?: AffiliateConversionWhereInput | AffiliateConversionWhereInput[]
    id?: StringFilter<"AffiliateConversion"> | string
    network?: StringFilter<"AffiliateConversion"> | string
    storeId?: StringFilter<"AffiliateConversion"> | string
    offerId?: StringNullableFilter<"AffiliateConversion"> | string | null
    clickId?: StringFilter<"AffiliateConversion"> | string
    externalTransactionId?: StringNullableFilter<"AffiliateConversion"> | string | null
    status?: StringFilter<"AffiliateConversion"> | string
    orderValue?: FloatNullableFilter<"AffiliateConversion"> | number | null
    commission?: FloatNullableFilter<"AffiliateConversion"> | number | null
    currency?: StringFilter<"AffiliateConversion"> | string
    occurredAt?: DateTimeFilter<"AffiliateConversion"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"AffiliateConversion"> | Date | string | null
    rawPayload?: StringNullableFilter<"AffiliateConversion"> | string | null
    createdAt?: DateTimeFilter<"AffiliateConversion"> | Date | string
    updatedAt?: DateTimeFilter<"AffiliateConversion"> | Date | string
  }

  export type AffiliateConversionOrderByWithRelationInput = {
    id?: SortOrder
    network?: SortOrder
    storeId?: SortOrder
    offerId?: SortOrderInput | SortOrder
    clickId?: SortOrder
    externalTransactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    orderValue?: SortOrderInput | SortOrder
    commission?: SortOrderInput | SortOrder
    currency?: SortOrder
    occurredAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateConversionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalTransactionId?: string
    AND?: AffiliateConversionWhereInput | AffiliateConversionWhereInput[]
    OR?: AffiliateConversionWhereInput[]
    NOT?: AffiliateConversionWhereInput | AffiliateConversionWhereInput[]
    network?: StringFilter<"AffiliateConversion"> | string
    storeId?: StringFilter<"AffiliateConversion"> | string
    offerId?: StringNullableFilter<"AffiliateConversion"> | string | null
    clickId?: StringFilter<"AffiliateConversion"> | string
    status?: StringFilter<"AffiliateConversion"> | string
    orderValue?: FloatNullableFilter<"AffiliateConversion"> | number | null
    commission?: FloatNullableFilter<"AffiliateConversion"> | number | null
    currency?: StringFilter<"AffiliateConversion"> | string
    occurredAt?: DateTimeFilter<"AffiliateConversion"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"AffiliateConversion"> | Date | string | null
    rawPayload?: StringNullableFilter<"AffiliateConversion"> | string | null
    createdAt?: DateTimeFilter<"AffiliateConversion"> | Date | string
    updatedAt?: DateTimeFilter<"AffiliateConversion"> | Date | string
  }, "id" | "externalTransactionId">

  export type AffiliateConversionOrderByWithAggregationInput = {
    id?: SortOrder
    network?: SortOrder
    storeId?: SortOrder
    offerId?: SortOrderInput | SortOrder
    clickId?: SortOrder
    externalTransactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    orderValue?: SortOrderInput | SortOrder
    commission?: SortOrderInput | SortOrder
    currency?: SortOrder
    occurredAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AffiliateConversionCountOrderByAggregateInput
    _avg?: AffiliateConversionAvgOrderByAggregateInput
    _max?: AffiliateConversionMaxOrderByAggregateInput
    _min?: AffiliateConversionMinOrderByAggregateInput
    _sum?: AffiliateConversionSumOrderByAggregateInput
  }

  export type AffiliateConversionScalarWhereWithAggregatesInput = {
    AND?: AffiliateConversionScalarWhereWithAggregatesInput | AffiliateConversionScalarWhereWithAggregatesInput[]
    OR?: AffiliateConversionScalarWhereWithAggregatesInput[]
    NOT?: AffiliateConversionScalarWhereWithAggregatesInput | AffiliateConversionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AffiliateConversion"> | string
    network?: StringWithAggregatesFilter<"AffiliateConversion"> | string
    storeId?: StringWithAggregatesFilter<"AffiliateConversion"> | string
    offerId?: StringNullableWithAggregatesFilter<"AffiliateConversion"> | string | null
    clickId?: StringWithAggregatesFilter<"AffiliateConversion"> | string
    externalTransactionId?: StringNullableWithAggregatesFilter<"AffiliateConversion"> | string | null
    status?: StringWithAggregatesFilter<"AffiliateConversion"> | string
    orderValue?: FloatNullableWithAggregatesFilter<"AffiliateConversion"> | number | null
    commission?: FloatNullableWithAggregatesFilter<"AffiliateConversion"> | number | null
    currency?: StringWithAggregatesFilter<"AffiliateConversion"> | string
    occurredAt?: DateTimeWithAggregatesFilter<"AffiliateConversion"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"AffiliateConversion"> | Date | string | null
    rawPayload?: StringNullableWithAggregatesFilter<"AffiliateConversion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AffiliateConversion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AffiliateConversion"> | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    brandId: string
    categoryId?: string | null
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    brandId: string
    categoryId?: string | null
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantCreateInput = {
    id?: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutVariantInput
    product: ProductCreateNestedOneWithoutVariantsInput
  }

  export type VariantUncheckedCreateInput = {
    id?: string
    productId: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutVariantNestedInput
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantCreateManyInput = {
    id?: string
    productId: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutStoreInput
    rawOffers?: RawOfferCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutStoreInput
    rawOffers?: RawOfferUncheckedCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorUncheckedCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutStoreNestedInput
    rawOffers?: RawOfferUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutStoreNestedInput
    rawOffers?: RawOfferUncheckedUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUncheckedUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncRunCreateInput = {
    id?: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
    syncErrors?: SyncErrorCreateNestedManyWithoutSyncRunInput
    store: StoreCreateNestedOneWithoutSyncRunsInput
  }

  export type SyncRunUncheckedCreateInput = {
    id?: string
    storeId: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
    syncErrors?: SyncErrorUncheckedCreateNestedManyWithoutSyncRunInput
  }

  export type SyncRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncErrors?: SyncErrorUpdateManyWithoutSyncRunNestedInput
    store?: StoreUpdateOneRequiredWithoutSyncRunsNestedInput
  }

  export type SyncRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncErrors?: SyncErrorUncheckedUpdateManyWithoutSyncRunNestedInput
  }

  export type SyncRunCreateManyInput = {
    id?: string
    storeId: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type SyncRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncErrorCreateInput = {
    id?: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutSyncErrorsInput
    syncRun: SyncRunCreateNestedOneWithoutSyncErrorsInput
  }

  export type SyncErrorUncheckedCreateInput = {
    id?: string
    syncRunId: string
    storeId: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type SyncErrorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSyncErrorsNestedInput
    syncRun?: SyncRunUpdateOneRequiredWithoutSyncErrorsNestedInput
  }

  export type SyncErrorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncErrorCreateManyInput = {
    id?: string
    syncRunId: string
    storeId: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type SyncErrorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncErrorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    id?: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutOffersInput
    variant: VariantCreateNestedOneWithoutOffersInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    variantId: string
    storeId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOffersNestedInput
    variant?: VariantUpdateOneRequiredWithoutOffersNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    variantId: string
    storeId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateInput = {
    id?: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    recordedAt?: Date | string
    offer: OfferCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    id?: string
    offerId: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    recordedAt?: Date | string
  }

  export type PriceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offer?: OfferUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateManyInput = {
    id?: string
    offerId: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    recordedAt?: Date | string
  }

  export type PriceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawOfferCreateInput = {
    id?: string
    syncRunId?: string | null
    externalId: string
    externalVariantId?: string
    rawTitle: string
    rawBrand?: string | null
    rawColor?: string | null
    rawSize?: string | null
    rawGtin?: string | null
    rawMpn?: string | null
    rawSku?: string | null
    url: string
    price: number
    shipping?: number | null
    stock?: string | null
    rawPayload: string
    status?: string
    similarityScore?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    confidence?: string | null
    matchedBy?: string | null
    matchingMethod?: string | null
    store: StoreCreateNestedOneWithoutRawOffersInput
  }

  export type RawOfferUncheckedCreateInput = {
    id?: string
    storeId: string
    syncRunId?: string | null
    externalId: string
    externalVariantId?: string
    rawTitle: string
    rawBrand?: string | null
    rawColor?: string | null
    rawSize?: string | null
    rawGtin?: string | null
    rawMpn?: string | null
    rawSku?: string | null
    url: string
    price: number
    shipping?: number | null
    stock?: string | null
    rawPayload: string
    status?: string
    similarityScore?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    confidence?: string | null
    matchedBy?: string | null
    matchingMethod?: string | null
  }

  export type RawOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
    store?: StoreUpdateOneRequiredWithoutRawOffersNestedInput
  }

  export type RawOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RawOfferCreateManyInput = {
    id?: string
    storeId: string
    syncRunId?: string | null
    externalId: string
    externalVariantId?: string
    rawTitle: string
    rawBrand?: string | null
    rawColor?: string | null
    rawSize?: string | null
    rawGtin?: string | null
    rawMpn?: string | null
    rawSku?: string | null
    url: string
    price: number
    shipping?: number | null
    stock?: string | null
    rawPayload: string
    status?: string
    similarityScore?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    confidence?: string | null
    matchedBy?: string | null
    matchingMethod?: string | null
  }

  export type RawOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RawOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsEventCreateInput = {
    id?: string
    type: string
    sessionId?: string | null
    productId?: string | null
    variantId?: string | null
    offerId?: string | null
    storeId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsEventUncheckedCreateInput = {
    id?: string
    type: string
    sessionId?: string | null
    productId?: string | null
    variantId?: string | null
    offerId?: string | null
    storeId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateManyInput = {
    id?: string
    type: string
    sessionId?: string | null
    productId?: string | null
    variantId?: string | null
    offerId?: string | null
    storeId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingDecisionCreateInput = {
    id?: string
    rawOfferId: string
    candidateProductId?: string | null
    confidenceScore?: number | null
    confidenceLevel: string
    signals: string
    reason: string
    decision?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchingDecisionUncheckedCreateInput = {
    id?: string
    rawOfferId: string
    candidateProductId?: string | null
    confidenceScore?: number | null
    confidenceLevel: string
    signals: string
    reason: string
    decision?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchingDecisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOfferId?: StringFieldUpdateOperationsInput | string
    candidateProductId?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    confidenceLevel?: StringFieldUpdateOperationsInput | string
    signals?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingDecisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOfferId?: StringFieldUpdateOperationsInput | string
    candidateProductId?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    confidenceLevel?: StringFieldUpdateOperationsInput | string
    signals?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingDecisionCreateManyInput = {
    id?: string
    rawOfferId: string
    candidateProductId?: string | null
    confidenceScore?: number | null
    confidenceLevel: string
    signals: string
    reason: string
    decision?: string
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchingDecisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOfferId?: StringFieldUpdateOperationsInput | string
    candidateProductId?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    confidenceLevel?: StringFieldUpdateOperationsInput | string
    signals?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingDecisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOfferId?: StringFieldUpdateOperationsInput | string
    candidateProductId?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    confidenceLevel?: StringFieldUpdateOperationsInput | string
    signals?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateConversionCreateInput = {
    id?: string
    network: string
    storeId: string
    offerId?: string | null
    clickId: string
    externalTransactionId?: string | null
    status?: string
    orderValue?: number | null
    commission?: number | null
    currency?: string
    occurredAt: Date | string
    confirmedAt?: Date | string | null
    rawPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AffiliateConversionUncheckedCreateInput = {
    id?: string
    network: string
    storeId: string
    offerId?: string | null
    clickId: string
    externalTransactionId?: string | null
    status?: string
    orderValue?: number | null
    commission?: number | null
    currency?: string
    occurredAt: Date | string
    confirmedAt?: Date | string | null
    rawPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AffiliateConversionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    clickId?: StringFieldUpdateOperationsInput | string
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderValue?: NullableFloatFieldUpdateOperationsInput | number | null
    commission?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateConversionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    clickId?: StringFieldUpdateOperationsInput | string
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderValue?: NullableFloatFieldUpdateOperationsInput | number | null
    commission?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateConversionCreateManyInput = {
    id?: string
    network: string
    storeId: string
    offerId?: string | null
    clickId: string
    externalTransactionId?: string | null
    status?: string
    orderValue?: number | null
    commission?: number | null
    currency?: string
    occurredAt: Date | string
    confirmedAt?: Date | string | null
    rawPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AffiliateConversionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    clickId?: StringFieldUpdateOperationsInput | string
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderValue?: NullableFloatFieldUpdateOperationsInput | number | null
    commission?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateConversionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    clickId?: StringFieldUpdateOperationsInput | string
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderValue?: NullableFloatFieldUpdateOperationsInput | number | null
    commission?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    model?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    model?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    model?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantProductIdSizeValueSizeSystemColorNormalizedCompoundUniqueInput = {
    productId: string
    sizeValue: string
    sizeSystem: string
    colorNormalized: string
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    colorRaw?: SortOrder
    colorNormalized?: SortOrder
    sizeRaw?: SortOrder
    sizeValue?: SortOrder
    sizeSystem?: SortOrder
    sku?: SortOrder
    gtin?: SortOrder
    mpn?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    colorRaw?: SortOrder
    colorNormalized?: SortOrder
    sizeRaw?: SortOrder
    sizeValue?: SortOrder
    sizeSystem?: SortOrder
    sku?: SortOrder
    gtin?: SortOrder
    mpn?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    colorRaw?: SortOrder
    colorNormalized?: SortOrder
    sizeRaw?: SortOrder
    sizeValue?: SortOrder
    sizeSystem?: SortOrder
    sku?: SortOrder
    gtin?: SortOrder
    mpn?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RawOfferListRelationFilter = {
    every?: RawOfferWhereInput
    some?: RawOfferWhereInput
    none?: RawOfferWhereInput
  }

  export type SyncErrorListRelationFilter = {
    every?: SyncErrorWhereInput
    some?: SyncErrorWhereInput
    none?: SyncErrorWhereInput
  }

  export type SyncRunListRelationFilter = {
    every?: SyncRunWhereInput
    some?: SyncRunWhereInput
    none?: SyncRunWhereInput
  }

  export type RawOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyncErrorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyncRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    websiteUrl?: SortOrder
    shopScore?: SortOrder
    logoUrl?: SortOrder
    isAffiliate?: SortOrder
    isActive?: SortOrder
    syncEnabled?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
    integrationType?: SortOrder
    affiliateNetwork?: SortOrder
    programId?: SortOrder
    trackingEnabled?: SortOrder
    deeplinkTemplate?: SortOrder
    isDemo?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    shopScore?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    websiteUrl?: SortOrder
    shopScore?: SortOrder
    logoUrl?: SortOrder
    isAffiliate?: SortOrder
    isActive?: SortOrder
    syncEnabled?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
    integrationType?: SortOrder
    affiliateNetwork?: SortOrder
    programId?: SortOrder
    trackingEnabled?: SortOrder
    deeplinkTemplate?: SortOrder
    isDemo?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    websiteUrl?: SortOrder
    shopScore?: SortOrder
    logoUrl?: SortOrder
    isAffiliate?: SortOrder
    isActive?: SortOrder
    syncEnabled?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
    integrationType?: SortOrder
    affiliateNetwork?: SortOrder
    programId?: SortOrder
    trackingEnabled?: SortOrder
    deeplinkTemplate?: SortOrder
    isDemo?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    shopScore?: SortOrder
    syncInterval?: SortOrder
    consecutiveFailures?: SortOrder
    expirationDays?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type SyncRunCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type SyncRunAvgOrderByAggregateInput = {
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrder
  }

  export type SyncRunMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type SyncRunMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type SyncRunSumOrderByAggregateInput = {
    itemsReceived?: SortOrder
    itemsProcessed?: SortOrder
    itemsCreated?: SortOrder
    itemsUpdated?: SortOrder
    itemsFailed?: SortOrder
    errorCount?: SortOrder
    missingSkuCount?: SortOrder
    invalidPriceCount?: SortOrder
    outOfStockCount?: SortOrder
    durationMs?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SyncRunRelationFilter = {
    is?: SyncRunWhereInput
    isNot?: SyncRunWhereInput
  }

  export type SyncErrorCountOrderByAggregateInput = {
    id?: SortOrder
    syncRunId?: SortOrder
    storeId?: SortOrder
    externalId?: SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncErrorMaxOrderByAggregateInput = {
    id?: SortOrder
    syncRunId?: SortOrder
    storeId?: SortOrder
    externalId?: SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncErrorMinOrderByAggregateInput = {
    id?: SortOrder
    syncRunId?: SortOrder
    storeId?: SortOrder
    externalId?: SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VariantRelationFilter = {
    is?: VariantWhereInput
    isNot?: VariantWhereInput
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferStoreIdExternalProductIdExternalVariantIdCompoundUniqueInput = {
    storeId: string
    externalProductId: string
    externalVariantId: string
  }

  export type OfferStoreIdVariantIdCompoundUniqueInput = {
    storeId: string
    variantId: string
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    storeId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    url?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stockStatus?: SortOrder
    needsManualReview?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    storeId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    url?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stockStatus?: SortOrder
    needsManualReview?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
    storeId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    url?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    stockStatus?: SortOrder
    needsManualReview?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OfferRelationFilter = {
    is?: OfferWhereInput
    isNot?: OfferWhereInput
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
    currency?: SortOrder
    recordedAt?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
    currency?: SortOrder
    recordedAt?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
    currency?: SortOrder
    recordedAt?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    priceBase?: SortOrder
    priceShipping?: SortOrder
    priceTotal?: SortOrder
  }

  export type RawOfferStoreIdExternalIdExternalVariantIdCompoundUniqueInput = {
    storeId: string
    externalId: string
    externalVariantId: string
  }

  export type RawOfferCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    syncRunId?: SortOrder
    externalId?: SortOrder
    externalVariantId?: SortOrder
    rawTitle?: SortOrder
    rawBrand?: SortOrder
    rawColor?: SortOrder
    rawSize?: SortOrder
    rawGtin?: SortOrder
    rawMpn?: SortOrder
    rawSku?: SortOrder
    url?: SortOrder
    price?: SortOrder
    shipping?: SortOrder
    stock?: SortOrder
    rawPayload?: SortOrder
    status?: SortOrder
    similarityScore?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confidence?: SortOrder
    matchedBy?: SortOrder
    matchingMethod?: SortOrder
  }

  export type RawOfferAvgOrderByAggregateInput = {
    price?: SortOrder
    shipping?: SortOrder
    similarityScore?: SortOrder
  }

  export type RawOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    syncRunId?: SortOrder
    externalId?: SortOrder
    externalVariantId?: SortOrder
    rawTitle?: SortOrder
    rawBrand?: SortOrder
    rawColor?: SortOrder
    rawSize?: SortOrder
    rawGtin?: SortOrder
    rawMpn?: SortOrder
    rawSku?: SortOrder
    url?: SortOrder
    price?: SortOrder
    shipping?: SortOrder
    stock?: SortOrder
    rawPayload?: SortOrder
    status?: SortOrder
    similarityScore?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confidence?: SortOrder
    matchedBy?: SortOrder
    matchingMethod?: SortOrder
  }

  export type RawOfferMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    syncRunId?: SortOrder
    externalId?: SortOrder
    externalVariantId?: SortOrder
    rawTitle?: SortOrder
    rawBrand?: SortOrder
    rawColor?: SortOrder
    rawSize?: SortOrder
    rawGtin?: SortOrder
    rawMpn?: SortOrder
    rawSku?: SortOrder
    url?: SortOrder
    price?: SortOrder
    shipping?: SortOrder
    stock?: SortOrder
    rawPayload?: SortOrder
    status?: SortOrder
    similarityScore?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    confidence?: SortOrder
    matchedBy?: SortOrder
    matchingMethod?: SortOrder
  }

  export type RawOfferSumOrderByAggregateInput = {
    price?: SortOrder
    shipping?: SortOrder
    similarityScore?: SortOrder
  }

  export type AnalyticsEventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    offerId?: SortOrder
    storeId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    offerId?: SortOrder
    storeId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    offerId?: SortOrder
    storeId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchingDecisionCountOrderByAggregateInput = {
    id?: SortOrder
    rawOfferId?: SortOrder
    candidateProductId?: SortOrder
    confidenceScore?: SortOrder
    confidenceLevel?: SortOrder
    signals?: SortOrder
    reason?: SortOrder
    decision?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchingDecisionAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type MatchingDecisionMaxOrderByAggregateInput = {
    id?: SortOrder
    rawOfferId?: SortOrder
    candidateProductId?: SortOrder
    confidenceScore?: SortOrder
    confidenceLevel?: SortOrder
    signals?: SortOrder
    reason?: SortOrder
    decision?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchingDecisionMinOrderByAggregateInput = {
    id?: SortOrder
    rawOfferId?: SortOrder
    candidateProductId?: SortOrder
    confidenceScore?: SortOrder
    confidenceLevel?: SortOrder
    signals?: SortOrder
    reason?: SortOrder
    decision?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchingDecisionSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type AffiliateConversionCountOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    storeId?: SortOrder
    offerId?: SortOrder
    clickId?: SortOrder
    externalTransactionId?: SortOrder
    status?: SortOrder
    orderValue?: SortOrder
    commission?: SortOrder
    currency?: SortOrder
    occurredAt?: SortOrder
    confirmedAt?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateConversionAvgOrderByAggregateInput = {
    orderValue?: SortOrder
    commission?: SortOrder
  }

  export type AffiliateConversionMaxOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    storeId?: SortOrder
    offerId?: SortOrder
    clickId?: SortOrder
    externalTransactionId?: SortOrder
    status?: SortOrder
    orderValue?: SortOrder
    commission?: SortOrder
    currency?: SortOrder
    occurredAt?: SortOrder
    confirmedAt?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateConversionMinOrderByAggregateInput = {
    id?: SortOrder
    network?: SortOrder
    storeId?: SortOrder
    offerId?: SortOrder
    clickId?: SortOrder
    externalTransactionId?: SortOrder
    status?: SortOrder
    orderValue?: SortOrder
    commission?: SortOrder
    currency?: SortOrder
    occurredAt?: SortOrder
    confirmedAt?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateConversionSumOrderByAggregateInput = {
    orderValue?: SortOrder
    commission?: SortOrder
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type OfferCreateNestedManyWithoutVariantInput = {
    create?: XOR<OfferCreateWithoutVariantInput, OfferUncheckedCreateWithoutVariantInput> | OfferCreateWithoutVariantInput[] | OfferUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVariantInput | OfferCreateOrConnectWithoutVariantInput[]
    createMany?: OfferCreateManyVariantInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type OfferUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<OfferCreateWithoutVariantInput, OfferUncheckedCreateWithoutVariantInput> | OfferCreateWithoutVariantInput[] | OfferUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVariantInput | OfferCreateOrConnectWithoutVariantInput[]
    createMany?: OfferCreateManyVariantInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUpdateManyWithoutVariantNestedInput = {
    create?: XOR<OfferCreateWithoutVariantInput, OfferUncheckedCreateWithoutVariantInput> | OfferCreateWithoutVariantInput[] | OfferUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVariantInput | OfferCreateOrConnectWithoutVariantInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutVariantInput | OfferUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: OfferCreateManyVariantInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutVariantInput | OfferUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutVariantInput | OfferUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type OfferUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<OfferCreateWithoutVariantInput, OfferUncheckedCreateWithoutVariantInput> | OfferCreateWithoutVariantInput[] | OfferUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutVariantInput | OfferCreateOrConnectWithoutVariantInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutVariantInput | OfferUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: OfferCreateManyVariantInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutVariantInput | OfferUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutVariantInput | OfferUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferCreateNestedManyWithoutStoreInput = {
    create?: XOR<OfferCreateWithoutStoreInput, OfferUncheckedCreateWithoutStoreInput> | OfferCreateWithoutStoreInput[] | OfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutStoreInput | OfferCreateOrConnectWithoutStoreInput[]
    createMany?: OfferCreateManyStoreInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type RawOfferCreateNestedManyWithoutStoreInput = {
    create?: XOR<RawOfferCreateWithoutStoreInput, RawOfferUncheckedCreateWithoutStoreInput> | RawOfferCreateWithoutStoreInput[] | RawOfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RawOfferCreateOrConnectWithoutStoreInput | RawOfferCreateOrConnectWithoutStoreInput[]
    createMany?: RawOfferCreateManyStoreInputEnvelope
    connect?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
  }

  export type SyncErrorCreateNestedManyWithoutStoreInput = {
    create?: XOR<SyncErrorCreateWithoutStoreInput, SyncErrorUncheckedCreateWithoutStoreInput> | SyncErrorCreateWithoutStoreInput[] | SyncErrorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutStoreInput | SyncErrorCreateOrConnectWithoutStoreInput[]
    createMany?: SyncErrorCreateManyStoreInputEnvelope
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
  }

  export type SyncRunCreateNestedManyWithoutStoreInput = {
    create?: XOR<SyncRunCreateWithoutStoreInput, SyncRunUncheckedCreateWithoutStoreInput> | SyncRunCreateWithoutStoreInput[] | SyncRunUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutStoreInput | SyncRunCreateOrConnectWithoutStoreInput[]
    createMany?: SyncRunCreateManyStoreInputEnvelope
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<OfferCreateWithoutStoreInput, OfferUncheckedCreateWithoutStoreInput> | OfferCreateWithoutStoreInput[] | OfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutStoreInput | OfferCreateOrConnectWithoutStoreInput[]
    createMany?: OfferCreateManyStoreInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type RawOfferUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<RawOfferCreateWithoutStoreInput, RawOfferUncheckedCreateWithoutStoreInput> | RawOfferCreateWithoutStoreInput[] | RawOfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RawOfferCreateOrConnectWithoutStoreInput | RawOfferCreateOrConnectWithoutStoreInput[]
    createMany?: RawOfferCreateManyStoreInputEnvelope
    connect?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
  }

  export type SyncErrorUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<SyncErrorCreateWithoutStoreInput, SyncErrorUncheckedCreateWithoutStoreInput> | SyncErrorCreateWithoutStoreInput[] | SyncErrorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutStoreInput | SyncErrorCreateOrConnectWithoutStoreInput[]
    createMany?: SyncErrorCreateManyStoreInputEnvelope
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
  }

  export type SyncRunUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<SyncRunCreateWithoutStoreInput, SyncRunUncheckedCreateWithoutStoreInput> | SyncRunCreateWithoutStoreInput[] | SyncRunUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutStoreInput | SyncRunCreateOrConnectWithoutStoreInput[]
    createMany?: SyncRunCreateManyStoreInputEnvelope
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OfferUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OfferCreateWithoutStoreInput, OfferUncheckedCreateWithoutStoreInput> | OfferCreateWithoutStoreInput[] | OfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutStoreInput | OfferCreateOrConnectWithoutStoreInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutStoreInput | OfferUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OfferCreateManyStoreInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutStoreInput | OfferUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutStoreInput | OfferUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type RawOfferUpdateManyWithoutStoreNestedInput = {
    create?: XOR<RawOfferCreateWithoutStoreInput, RawOfferUncheckedCreateWithoutStoreInput> | RawOfferCreateWithoutStoreInput[] | RawOfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RawOfferCreateOrConnectWithoutStoreInput | RawOfferCreateOrConnectWithoutStoreInput[]
    upsert?: RawOfferUpsertWithWhereUniqueWithoutStoreInput | RawOfferUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: RawOfferCreateManyStoreInputEnvelope
    set?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    disconnect?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    delete?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    connect?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    update?: RawOfferUpdateWithWhereUniqueWithoutStoreInput | RawOfferUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: RawOfferUpdateManyWithWhereWithoutStoreInput | RawOfferUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: RawOfferScalarWhereInput | RawOfferScalarWhereInput[]
  }

  export type SyncErrorUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SyncErrorCreateWithoutStoreInput, SyncErrorUncheckedCreateWithoutStoreInput> | SyncErrorCreateWithoutStoreInput[] | SyncErrorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutStoreInput | SyncErrorCreateOrConnectWithoutStoreInput[]
    upsert?: SyncErrorUpsertWithWhereUniqueWithoutStoreInput | SyncErrorUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SyncErrorCreateManyStoreInputEnvelope
    set?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    disconnect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    delete?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    update?: SyncErrorUpdateWithWhereUniqueWithoutStoreInput | SyncErrorUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SyncErrorUpdateManyWithWhereWithoutStoreInput | SyncErrorUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SyncErrorScalarWhereInput | SyncErrorScalarWhereInput[]
  }

  export type SyncRunUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SyncRunCreateWithoutStoreInput, SyncRunUncheckedCreateWithoutStoreInput> | SyncRunCreateWithoutStoreInput[] | SyncRunUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutStoreInput | SyncRunCreateOrConnectWithoutStoreInput[]
    upsert?: SyncRunUpsertWithWhereUniqueWithoutStoreInput | SyncRunUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SyncRunCreateManyStoreInputEnvelope
    set?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    disconnect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    delete?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    update?: SyncRunUpdateWithWhereUniqueWithoutStoreInput | SyncRunUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SyncRunUpdateManyWithWhereWithoutStoreInput | SyncRunUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OfferCreateWithoutStoreInput, OfferUncheckedCreateWithoutStoreInput> | OfferCreateWithoutStoreInput[] | OfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutStoreInput | OfferCreateOrConnectWithoutStoreInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutStoreInput | OfferUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OfferCreateManyStoreInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutStoreInput | OfferUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutStoreInput | OfferUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type RawOfferUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<RawOfferCreateWithoutStoreInput, RawOfferUncheckedCreateWithoutStoreInput> | RawOfferCreateWithoutStoreInput[] | RawOfferUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RawOfferCreateOrConnectWithoutStoreInput | RawOfferCreateOrConnectWithoutStoreInput[]
    upsert?: RawOfferUpsertWithWhereUniqueWithoutStoreInput | RawOfferUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: RawOfferCreateManyStoreInputEnvelope
    set?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    disconnect?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    delete?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    connect?: RawOfferWhereUniqueInput | RawOfferWhereUniqueInput[]
    update?: RawOfferUpdateWithWhereUniqueWithoutStoreInput | RawOfferUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: RawOfferUpdateManyWithWhereWithoutStoreInput | RawOfferUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: RawOfferScalarWhereInput | RawOfferScalarWhereInput[]
  }

  export type SyncErrorUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SyncErrorCreateWithoutStoreInput, SyncErrorUncheckedCreateWithoutStoreInput> | SyncErrorCreateWithoutStoreInput[] | SyncErrorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutStoreInput | SyncErrorCreateOrConnectWithoutStoreInput[]
    upsert?: SyncErrorUpsertWithWhereUniqueWithoutStoreInput | SyncErrorUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SyncErrorCreateManyStoreInputEnvelope
    set?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    disconnect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    delete?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    update?: SyncErrorUpdateWithWhereUniqueWithoutStoreInput | SyncErrorUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SyncErrorUpdateManyWithWhereWithoutStoreInput | SyncErrorUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SyncErrorScalarWhereInput | SyncErrorScalarWhereInput[]
  }

  export type SyncRunUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SyncRunCreateWithoutStoreInput, SyncRunUncheckedCreateWithoutStoreInput> | SyncRunCreateWithoutStoreInput[] | SyncRunUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutStoreInput | SyncRunCreateOrConnectWithoutStoreInput[]
    upsert?: SyncRunUpsertWithWhereUniqueWithoutStoreInput | SyncRunUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SyncRunCreateManyStoreInputEnvelope
    set?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    disconnect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    delete?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    update?: SyncRunUpdateWithWhereUniqueWithoutStoreInput | SyncRunUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SyncRunUpdateManyWithWhereWithoutStoreInput | SyncRunUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
  }

  export type SyncErrorCreateNestedManyWithoutSyncRunInput = {
    create?: XOR<SyncErrorCreateWithoutSyncRunInput, SyncErrorUncheckedCreateWithoutSyncRunInput> | SyncErrorCreateWithoutSyncRunInput[] | SyncErrorUncheckedCreateWithoutSyncRunInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutSyncRunInput | SyncErrorCreateOrConnectWithoutSyncRunInput[]
    createMany?: SyncErrorCreateManySyncRunInputEnvelope
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
  }

  export type StoreCreateNestedOneWithoutSyncRunsInput = {
    create?: XOR<StoreCreateWithoutSyncRunsInput, StoreUncheckedCreateWithoutSyncRunsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSyncRunsInput
    connect?: StoreWhereUniqueInput
  }

  export type SyncErrorUncheckedCreateNestedManyWithoutSyncRunInput = {
    create?: XOR<SyncErrorCreateWithoutSyncRunInput, SyncErrorUncheckedCreateWithoutSyncRunInput> | SyncErrorCreateWithoutSyncRunInput[] | SyncErrorUncheckedCreateWithoutSyncRunInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutSyncRunInput | SyncErrorCreateOrConnectWithoutSyncRunInput[]
    createMany?: SyncErrorCreateManySyncRunInputEnvelope
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SyncErrorUpdateManyWithoutSyncRunNestedInput = {
    create?: XOR<SyncErrorCreateWithoutSyncRunInput, SyncErrorUncheckedCreateWithoutSyncRunInput> | SyncErrorCreateWithoutSyncRunInput[] | SyncErrorUncheckedCreateWithoutSyncRunInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutSyncRunInput | SyncErrorCreateOrConnectWithoutSyncRunInput[]
    upsert?: SyncErrorUpsertWithWhereUniqueWithoutSyncRunInput | SyncErrorUpsertWithWhereUniqueWithoutSyncRunInput[]
    createMany?: SyncErrorCreateManySyncRunInputEnvelope
    set?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    disconnect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    delete?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    update?: SyncErrorUpdateWithWhereUniqueWithoutSyncRunInput | SyncErrorUpdateWithWhereUniqueWithoutSyncRunInput[]
    updateMany?: SyncErrorUpdateManyWithWhereWithoutSyncRunInput | SyncErrorUpdateManyWithWhereWithoutSyncRunInput[]
    deleteMany?: SyncErrorScalarWhereInput | SyncErrorScalarWhereInput[]
  }

  export type StoreUpdateOneRequiredWithoutSyncRunsNestedInput = {
    create?: XOR<StoreCreateWithoutSyncRunsInput, StoreUncheckedCreateWithoutSyncRunsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSyncRunsInput
    upsert?: StoreUpsertWithoutSyncRunsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutSyncRunsInput, StoreUpdateWithoutSyncRunsInput>, StoreUncheckedUpdateWithoutSyncRunsInput>
  }

  export type SyncErrorUncheckedUpdateManyWithoutSyncRunNestedInput = {
    create?: XOR<SyncErrorCreateWithoutSyncRunInput, SyncErrorUncheckedCreateWithoutSyncRunInput> | SyncErrorCreateWithoutSyncRunInput[] | SyncErrorUncheckedCreateWithoutSyncRunInput[]
    connectOrCreate?: SyncErrorCreateOrConnectWithoutSyncRunInput | SyncErrorCreateOrConnectWithoutSyncRunInput[]
    upsert?: SyncErrorUpsertWithWhereUniqueWithoutSyncRunInput | SyncErrorUpsertWithWhereUniqueWithoutSyncRunInput[]
    createMany?: SyncErrorCreateManySyncRunInputEnvelope
    set?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    disconnect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    delete?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    connect?: SyncErrorWhereUniqueInput | SyncErrorWhereUniqueInput[]
    update?: SyncErrorUpdateWithWhereUniqueWithoutSyncRunInput | SyncErrorUpdateWithWhereUniqueWithoutSyncRunInput[]
    updateMany?: SyncErrorUpdateManyWithWhereWithoutSyncRunInput | SyncErrorUpdateManyWithWhereWithoutSyncRunInput[]
    deleteMany?: SyncErrorScalarWhereInput | SyncErrorScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutSyncErrorsInput = {
    create?: XOR<StoreCreateWithoutSyncErrorsInput, StoreUncheckedCreateWithoutSyncErrorsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSyncErrorsInput
    connect?: StoreWhereUniqueInput
  }

  export type SyncRunCreateNestedOneWithoutSyncErrorsInput = {
    create?: XOR<SyncRunCreateWithoutSyncErrorsInput, SyncRunUncheckedCreateWithoutSyncErrorsInput>
    connectOrCreate?: SyncRunCreateOrConnectWithoutSyncErrorsInput
    connect?: SyncRunWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutSyncErrorsNestedInput = {
    create?: XOR<StoreCreateWithoutSyncErrorsInput, StoreUncheckedCreateWithoutSyncErrorsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSyncErrorsInput
    upsert?: StoreUpsertWithoutSyncErrorsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutSyncErrorsInput, StoreUpdateWithoutSyncErrorsInput>, StoreUncheckedUpdateWithoutSyncErrorsInput>
  }

  export type SyncRunUpdateOneRequiredWithoutSyncErrorsNestedInput = {
    create?: XOR<SyncRunCreateWithoutSyncErrorsInput, SyncRunUncheckedCreateWithoutSyncErrorsInput>
    connectOrCreate?: SyncRunCreateOrConnectWithoutSyncErrorsInput
    upsert?: SyncRunUpsertWithoutSyncErrorsInput
    connect?: SyncRunWhereUniqueInput
    update?: XOR<XOR<SyncRunUpdateToOneWithWhereWithoutSyncErrorsInput, SyncRunUpdateWithoutSyncErrorsInput>, SyncRunUncheckedUpdateWithoutSyncErrorsInput>
  }

  export type StoreCreateNestedOneWithoutOffersInput = {
    create?: XOR<StoreCreateWithoutOffersInput, StoreUncheckedCreateWithoutOffersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOffersInput
    connect?: StoreWhereUniqueInput
  }

  export type VariantCreateNestedOneWithoutOffersInput = {
    create?: XOR<VariantCreateWithoutOffersInput, VariantUncheckedCreateWithoutOffersInput>
    connectOrCreate?: VariantCreateOrConnectWithoutOffersInput
    connect?: VariantWhereUniqueInput
  }

  export type PriceHistoryCreateNestedManyWithoutOfferInput = {
    create?: XOR<PriceHistoryCreateWithoutOfferInput, PriceHistoryUncheckedCreateWithoutOfferInput> | PriceHistoryCreateWithoutOfferInput[] | PriceHistoryUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutOfferInput | PriceHistoryCreateOrConnectWithoutOfferInput[]
    createMany?: PriceHistoryCreateManyOfferInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<PriceHistoryCreateWithoutOfferInput, PriceHistoryUncheckedCreateWithoutOfferInput> | PriceHistoryCreateWithoutOfferInput[] | PriceHistoryUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutOfferInput | PriceHistoryCreateOrConnectWithoutOfferInput[]
    createMany?: PriceHistoryCreateManyOfferInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoreUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<StoreCreateWithoutOffersInput, StoreUncheckedCreateWithoutOffersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOffersInput
    upsert?: StoreUpsertWithoutOffersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutOffersInput, StoreUpdateWithoutOffersInput>, StoreUncheckedUpdateWithoutOffersInput>
  }

  export type VariantUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<VariantCreateWithoutOffersInput, VariantUncheckedCreateWithoutOffersInput>
    connectOrCreate?: VariantCreateOrConnectWithoutOffersInput
    upsert?: VariantUpsertWithoutOffersInput
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutOffersInput, VariantUpdateWithoutOffersInput>, VariantUncheckedUpdateWithoutOffersInput>
  }

  export type PriceHistoryUpdateManyWithoutOfferNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutOfferInput, PriceHistoryUncheckedCreateWithoutOfferInput> | PriceHistoryCreateWithoutOfferInput[] | PriceHistoryUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutOfferInput | PriceHistoryCreateOrConnectWithoutOfferInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutOfferInput | PriceHistoryUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: PriceHistoryCreateManyOfferInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutOfferInput | PriceHistoryUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutOfferInput | PriceHistoryUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutOfferInput, PriceHistoryUncheckedCreateWithoutOfferInput> | PriceHistoryCreateWithoutOfferInput[] | PriceHistoryUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutOfferInput | PriceHistoryCreateOrConnectWithoutOfferInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutOfferInput | PriceHistoryUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: PriceHistoryCreateManyOfferInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutOfferInput | PriceHistoryUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutOfferInput | PriceHistoryUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type OfferCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<OfferCreateWithoutPriceHistoryInput, OfferUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: OfferCreateOrConnectWithoutPriceHistoryInput
    connect?: OfferWhereUniqueInput
  }

  export type OfferUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<OfferCreateWithoutPriceHistoryInput, OfferUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: OfferCreateOrConnectWithoutPriceHistoryInput
    upsert?: OfferUpsertWithoutPriceHistoryInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutPriceHistoryInput, OfferUpdateWithoutPriceHistoryInput>, OfferUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type StoreCreateNestedOneWithoutRawOffersInput = {
    create?: XOR<StoreCreateWithoutRawOffersInput, StoreUncheckedCreateWithoutRawOffersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutRawOffersInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutRawOffersNestedInput = {
    create?: XOR<StoreCreateWithoutRawOffersInput, StoreUncheckedCreateWithoutRawOffersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutRawOffersInput
    upsert?: StoreUpsertWithoutRawOffersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutRawOffersInput, StoreUpdateWithoutRawOffersInput>, StoreUncheckedUpdateWithoutRawOffersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProductCreateWithoutBrandInput = {
    id?: string
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: string
    categoryId?: string | null
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    brandId?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    model?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    gender?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    brandId: string
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type BrandCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type VariantCreateWithoutProductInput = {
    id?: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateManyProductInputEnvelope = {
    data: VariantCreateManyProductInput | VariantCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: StringFilter<"Variant"> | string
    productId?: StringFilter<"Variant"> | string
    colorRaw?: StringNullableFilter<"Variant"> | string | null
    colorNormalized?: StringNullableFilter<"Variant"> | string | null
    sizeRaw?: StringNullableFilter<"Variant"> | string | null
    sizeValue?: StringNullableFilter<"Variant"> | string | null
    sizeSystem?: StringNullableFilter<"Variant"> | string | null
    sku?: StringNullableFilter<"Variant"> | string | null
    gtin?: StringNullableFilter<"Variant"> | string | null
    mpn?: StringNullableFilter<"Variant"> | string | null
    imageUrl?: StringNullableFilter<"Variant"> | string | null
    createdAt?: DateTimeFilter<"Variant"> | Date | string
    updatedAt?: DateTimeFilter<"Variant"> | Date | string
  }

  export type OfferCreateWithoutVariantInput = {
    id?: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutOffersInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutVariantInput = {
    id?: string
    storeId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutVariantInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutVariantInput, OfferUncheckedCreateWithoutVariantInput>
  }

  export type OfferCreateManyVariantInputEnvelope = {
    data: OfferCreateManyVariantInput | OfferCreateManyVariantInput[]
  }

  export type ProductCreateWithoutVariantsInput = {
    id?: string
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    brand: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    brandId: string
    categoryId?: string | null
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type OfferUpsertWithWhereUniqueWithoutVariantInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutVariantInput, OfferUncheckedUpdateWithoutVariantInput>
    create: XOR<OfferCreateWithoutVariantInput, OfferUncheckedCreateWithoutVariantInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutVariantInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutVariantInput, OfferUncheckedUpdateWithoutVariantInput>
  }

  export type OfferUpdateManyWithWhereWithoutVariantInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutVariantInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    variantId?: StringFilter<"Offer"> | string
    storeId?: StringFilter<"Offer"> | string
    externalProductId?: StringFilter<"Offer"> | string
    externalVariantId?: StringFilter<"Offer"> | string
    url?: StringFilter<"Offer"> | string
    priceBase?: FloatFilter<"Offer"> | number
    priceShipping?: FloatNullableFilter<"Offer"> | number | null
    priceTotal?: FloatNullableFilter<"Offer"> | number | null
    currency?: StringFilter<"Offer"> | string
    status?: StringFilter<"Offer"> | string
    stockStatus?: StringFilter<"Offer"> | string
    needsManualReview?: BoolFilter<"Offer"> | boolean
    lastSeenAt?: DateTimeFilter<"Offer"> | Date | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateWithoutStoreInput = {
    id?: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    variant: VariantCreateNestedOneWithoutOffersInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutStoreInput = {
    id?: string
    variantId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutStoreInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutStoreInput, OfferUncheckedCreateWithoutStoreInput>
  }

  export type OfferCreateManyStoreInputEnvelope = {
    data: OfferCreateManyStoreInput | OfferCreateManyStoreInput[]
  }

  export type RawOfferCreateWithoutStoreInput = {
    id?: string
    syncRunId?: string | null
    externalId: string
    externalVariantId?: string
    rawTitle: string
    rawBrand?: string | null
    rawColor?: string | null
    rawSize?: string | null
    rawGtin?: string | null
    rawMpn?: string | null
    rawSku?: string | null
    url: string
    price: number
    shipping?: number | null
    stock?: string | null
    rawPayload: string
    status?: string
    similarityScore?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    confidence?: string | null
    matchedBy?: string | null
    matchingMethod?: string | null
  }

  export type RawOfferUncheckedCreateWithoutStoreInput = {
    id?: string
    syncRunId?: string | null
    externalId: string
    externalVariantId?: string
    rawTitle: string
    rawBrand?: string | null
    rawColor?: string | null
    rawSize?: string | null
    rawGtin?: string | null
    rawMpn?: string | null
    rawSku?: string | null
    url: string
    price: number
    shipping?: number | null
    stock?: string | null
    rawPayload: string
    status?: string
    similarityScore?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    confidence?: string | null
    matchedBy?: string | null
    matchingMethod?: string | null
  }

  export type RawOfferCreateOrConnectWithoutStoreInput = {
    where: RawOfferWhereUniqueInput
    create: XOR<RawOfferCreateWithoutStoreInput, RawOfferUncheckedCreateWithoutStoreInput>
  }

  export type RawOfferCreateManyStoreInputEnvelope = {
    data: RawOfferCreateManyStoreInput | RawOfferCreateManyStoreInput[]
  }

  export type SyncErrorCreateWithoutStoreInput = {
    id?: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
    syncRun: SyncRunCreateNestedOneWithoutSyncErrorsInput
  }

  export type SyncErrorUncheckedCreateWithoutStoreInput = {
    id?: string
    syncRunId: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type SyncErrorCreateOrConnectWithoutStoreInput = {
    where: SyncErrorWhereUniqueInput
    create: XOR<SyncErrorCreateWithoutStoreInput, SyncErrorUncheckedCreateWithoutStoreInput>
  }

  export type SyncErrorCreateManyStoreInputEnvelope = {
    data: SyncErrorCreateManyStoreInput | SyncErrorCreateManyStoreInput[]
  }

  export type SyncRunCreateWithoutStoreInput = {
    id?: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
    syncErrors?: SyncErrorCreateNestedManyWithoutSyncRunInput
  }

  export type SyncRunUncheckedCreateWithoutStoreInput = {
    id?: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
    syncErrors?: SyncErrorUncheckedCreateNestedManyWithoutSyncRunInput
  }

  export type SyncRunCreateOrConnectWithoutStoreInput = {
    where: SyncRunWhereUniqueInput
    create: XOR<SyncRunCreateWithoutStoreInput, SyncRunUncheckedCreateWithoutStoreInput>
  }

  export type SyncRunCreateManyStoreInputEnvelope = {
    data: SyncRunCreateManyStoreInput | SyncRunCreateManyStoreInput[]
  }

  export type OfferUpsertWithWhereUniqueWithoutStoreInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutStoreInput, OfferUncheckedUpdateWithoutStoreInput>
    create: XOR<OfferCreateWithoutStoreInput, OfferUncheckedCreateWithoutStoreInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutStoreInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutStoreInput, OfferUncheckedUpdateWithoutStoreInput>
  }

  export type OfferUpdateManyWithWhereWithoutStoreInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutStoreInput>
  }

  export type RawOfferUpsertWithWhereUniqueWithoutStoreInput = {
    where: RawOfferWhereUniqueInput
    update: XOR<RawOfferUpdateWithoutStoreInput, RawOfferUncheckedUpdateWithoutStoreInput>
    create: XOR<RawOfferCreateWithoutStoreInput, RawOfferUncheckedCreateWithoutStoreInput>
  }

  export type RawOfferUpdateWithWhereUniqueWithoutStoreInput = {
    where: RawOfferWhereUniqueInput
    data: XOR<RawOfferUpdateWithoutStoreInput, RawOfferUncheckedUpdateWithoutStoreInput>
  }

  export type RawOfferUpdateManyWithWhereWithoutStoreInput = {
    where: RawOfferScalarWhereInput
    data: XOR<RawOfferUpdateManyMutationInput, RawOfferUncheckedUpdateManyWithoutStoreInput>
  }

  export type RawOfferScalarWhereInput = {
    AND?: RawOfferScalarWhereInput | RawOfferScalarWhereInput[]
    OR?: RawOfferScalarWhereInput[]
    NOT?: RawOfferScalarWhereInput | RawOfferScalarWhereInput[]
    id?: StringFilter<"RawOffer"> | string
    storeId?: StringFilter<"RawOffer"> | string
    syncRunId?: StringNullableFilter<"RawOffer"> | string | null
    externalId?: StringFilter<"RawOffer"> | string
    externalVariantId?: StringFilter<"RawOffer"> | string
    rawTitle?: StringFilter<"RawOffer"> | string
    rawBrand?: StringNullableFilter<"RawOffer"> | string | null
    rawColor?: StringNullableFilter<"RawOffer"> | string | null
    rawSize?: StringNullableFilter<"RawOffer"> | string | null
    rawGtin?: StringNullableFilter<"RawOffer"> | string | null
    rawMpn?: StringNullableFilter<"RawOffer"> | string | null
    rawSku?: StringNullableFilter<"RawOffer"> | string | null
    url?: StringFilter<"RawOffer"> | string
    price?: FloatFilter<"RawOffer"> | number
    shipping?: FloatNullableFilter<"RawOffer"> | number | null
    stock?: StringNullableFilter<"RawOffer"> | string | null
    rawPayload?: StringFilter<"RawOffer"> | string
    status?: StringFilter<"RawOffer"> | string
    similarityScore?: FloatNullableFilter<"RawOffer"> | number | null
    isDemo?: BoolFilter<"RawOffer"> | boolean
    createdAt?: DateTimeFilter<"RawOffer"> | Date | string
    updatedAt?: DateTimeFilter<"RawOffer"> | Date | string
    confidence?: StringNullableFilter<"RawOffer"> | string | null
    matchedBy?: StringNullableFilter<"RawOffer"> | string | null
    matchingMethod?: StringNullableFilter<"RawOffer"> | string | null
  }

  export type SyncErrorUpsertWithWhereUniqueWithoutStoreInput = {
    where: SyncErrorWhereUniqueInput
    update: XOR<SyncErrorUpdateWithoutStoreInput, SyncErrorUncheckedUpdateWithoutStoreInput>
    create: XOR<SyncErrorCreateWithoutStoreInput, SyncErrorUncheckedCreateWithoutStoreInput>
  }

  export type SyncErrorUpdateWithWhereUniqueWithoutStoreInput = {
    where: SyncErrorWhereUniqueInput
    data: XOR<SyncErrorUpdateWithoutStoreInput, SyncErrorUncheckedUpdateWithoutStoreInput>
  }

  export type SyncErrorUpdateManyWithWhereWithoutStoreInput = {
    where: SyncErrorScalarWhereInput
    data: XOR<SyncErrorUpdateManyMutationInput, SyncErrorUncheckedUpdateManyWithoutStoreInput>
  }

  export type SyncErrorScalarWhereInput = {
    AND?: SyncErrorScalarWhereInput | SyncErrorScalarWhereInput[]
    OR?: SyncErrorScalarWhereInput[]
    NOT?: SyncErrorScalarWhereInput | SyncErrorScalarWhereInput[]
    id?: StringFilter<"SyncError"> | string
    syncRunId?: StringFilter<"SyncError"> | string
    storeId?: StringFilter<"SyncError"> | string
    externalId?: StringNullableFilter<"SyncError"> | string | null
    errorCode?: StringFilter<"SyncError"> | string
    message?: StringFilter<"SyncError"> | string
    rawPayload?: StringNullableFilter<"SyncError"> | string | null
    createdAt?: DateTimeFilter<"SyncError"> | Date | string
  }

  export type SyncRunUpsertWithWhereUniqueWithoutStoreInput = {
    where: SyncRunWhereUniqueInput
    update: XOR<SyncRunUpdateWithoutStoreInput, SyncRunUncheckedUpdateWithoutStoreInput>
    create: XOR<SyncRunCreateWithoutStoreInput, SyncRunUncheckedCreateWithoutStoreInput>
  }

  export type SyncRunUpdateWithWhereUniqueWithoutStoreInput = {
    where: SyncRunWhereUniqueInput
    data: XOR<SyncRunUpdateWithoutStoreInput, SyncRunUncheckedUpdateWithoutStoreInput>
  }

  export type SyncRunUpdateManyWithWhereWithoutStoreInput = {
    where: SyncRunScalarWhereInput
    data: XOR<SyncRunUpdateManyMutationInput, SyncRunUncheckedUpdateManyWithoutStoreInput>
  }

  export type SyncRunScalarWhereInput = {
    AND?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
    OR?: SyncRunScalarWhereInput[]
    NOT?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
    id?: StringFilter<"SyncRun"> | string
    storeId?: StringFilter<"SyncRun"> | string
    sourceType?: StringFilter<"SyncRun"> | string
    status?: StringFilter<"SyncRun"> | string
    itemsReceived?: IntFilter<"SyncRun"> | number
    itemsProcessed?: IntFilter<"SyncRun"> | number
    itemsCreated?: IntFilter<"SyncRun"> | number
    itemsUpdated?: IntFilter<"SyncRun"> | number
    itemsFailed?: IntFilter<"SyncRun"> | number
    errorCount?: IntFilter<"SyncRun"> | number
    missingSkuCount?: IntFilter<"SyncRun"> | number
    invalidPriceCount?: IntFilter<"SyncRun"> | number
    outOfStockCount?: IntFilter<"SyncRun"> | number
    durationMs?: IntNullableFilter<"SyncRun"> | number | null
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    finishedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
  }

  export type SyncErrorCreateWithoutSyncRunInput = {
    id?: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutSyncErrorsInput
  }

  export type SyncErrorUncheckedCreateWithoutSyncRunInput = {
    id?: string
    storeId: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type SyncErrorCreateOrConnectWithoutSyncRunInput = {
    where: SyncErrorWhereUniqueInput
    create: XOR<SyncErrorCreateWithoutSyncRunInput, SyncErrorUncheckedCreateWithoutSyncRunInput>
  }

  export type SyncErrorCreateManySyncRunInputEnvelope = {
    data: SyncErrorCreateManySyncRunInput | SyncErrorCreateManySyncRunInput[]
  }

  export type StoreCreateWithoutSyncRunsInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutStoreInput
    rawOffers?: RawOfferCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutSyncRunsInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutStoreInput
    rawOffers?: RawOfferUncheckedCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutSyncRunsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutSyncRunsInput, StoreUncheckedCreateWithoutSyncRunsInput>
  }

  export type SyncErrorUpsertWithWhereUniqueWithoutSyncRunInput = {
    where: SyncErrorWhereUniqueInput
    update: XOR<SyncErrorUpdateWithoutSyncRunInput, SyncErrorUncheckedUpdateWithoutSyncRunInput>
    create: XOR<SyncErrorCreateWithoutSyncRunInput, SyncErrorUncheckedCreateWithoutSyncRunInput>
  }

  export type SyncErrorUpdateWithWhereUniqueWithoutSyncRunInput = {
    where: SyncErrorWhereUniqueInput
    data: XOR<SyncErrorUpdateWithoutSyncRunInput, SyncErrorUncheckedUpdateWithoutSyncRunInput>
  }

  export type SyncErrorUpdateManyWithWhereWithoutSyncRunInput = {
    where: SyncErrorScalarWhereInput
    data: XOR<SyncErrorUpdateManyMutationInput, SyncErrorUncheckedUpdateManyWithoutSyncRunInput>
  }

  export type StoreUpsertWithoutSyncRunsInput = {
    update: XOR<StoreUpdateWithoutSyncRunsInput, StoreUncheckedUpdateWithoutSyncRunsInput>
    create: XOR<StoreCreateWithoutSyncRunsInput, StoreUncheckedCreateWithoutSyncRunsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutSyncRunsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutSyncRunsInput, StoreUncheckedUpdateWithoutSyncRunsInput>
  }

  export type StoreUpdateWithoutSyncRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutStoreNestedInput
    rawOffers?: RawOfferUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutSyncRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutStoreNestedInput
    rawOffers?: RawOfferUncheckedUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutSyncErrorsInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutStoreInput
    rawOffers?: RawOfferCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutSyncErrorsInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutStoreInput
    rawOffers?: RawOfferUncheckedCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutSyncErrorsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutSyncErrorsInput, StoreUncheckedCreateWithoutSyncErrorsInput>
  }

  export type SyncRunCreateWithoutSyncErrorsInput = {
    id?: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
    store: StoreCreateNestedOneWithoutSyncRunsInput
  }

  export type SyncRunUncheckedCreateWithoutSyncErrorsInput = {
    id?: string
    storeId: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type SyncRunCreateOrConnectWithoutSyncErrorsInput = {
    where: SyncRunWhereUniqueInput
    create: XOR<SyncRunCreateWithoutSyncErrorsInput, SyncRunUncheckedCreateWithoutSyncErrorsInput>
  }

  export type StoreUpsertWithoutSyncErrorsInput = {
    update: XOR<StoreUpdateWithoutSyncErrorsInput, StoreUncheckedUpdateWithoutSyncErrorsInput>
    create: XOR<StoreCreateWithoutSyncErrorsInput, StoreUncheckedCreateWithoutSyncErrorsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutSyncErrorsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutSyncErrorsInput, StoreUncheckedUpdateWithoutSyncErrorsInput>
  }

  export type StoreUpdateWithoutSyncErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutStoreNestedInput
    rawOffers?: RawOfferUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutSyncErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutStoreNestedInput
    rawOffers?: RawOfferUncheckedUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type SyncRunUpsertWithoutSyncErrorsInput = {
    update: XOR<SyncRunUpdateWithoutSyncErrorsInput, SyncRunUncheckedUpdateWithoutSyncErrorsInput>
    create: XOR<SyncRunCreateWithoutSyncErrorsInput, SyncRunUncheckedCreateWithoutSyncErrorsInput>
    where?: SyncRunWhereInput
  }

  export type SyncRunUpdateToOneWithWhereWithoutSyncErrorsInput = {
    where?: SyncRunWhereInput
    data: XOR<SyncRunUpdateWithoutSyncErrorsInput, SyncRunUncheckedUpdateWithoutSyncErrorsInput>
  }

  export type SyncRunUpdateWithoutSyncErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store?: StoreUpdateOneRequiredWithoutSyncRunsNestedInput
  }

  export type SyncRunUncheckedUpdateWithoutSyncErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreCreateWithoutOffersInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawOffers?: RawOfferCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOffersInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawOffers?: RawOfferUncheckedCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorUncheckedCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOffersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOffersInput, StoreUncheckedCreateWithoutOffersInput>
  }

  export type VariantCreateWithoutOffersInput = {
    id?: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
  }

  export type VariantUncheckedCreateWithoutOffersInput = {
    id?: string
    productId: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantCreateOrConnectWithoutOffersInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutOffersInput, VariantUncheckedCreateWithoutOffersInput>
  }

  export type PriceHistoryCreateWithoutOfferInput = {
    id?: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    recordedAt?: Date | string
  }

  export type PriceHistoryUncheckedCreateWithoutOfferInput = {
    id?: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    recordedAt?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutOfferInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutOfferInput, PriceHistoryUncheckedCreateWithoutOfferInput>
  }

  export type PriceHistoryCreateManyOfferInputEnvelope = {
    data: PriceHistoryCreateManyOfferInput | PriceHistoryCreateManyOfferInput[]
  }

  export type StoreUpsertWithoutOffersInput = {
    update: XOR<StoreUpdateWithoutOffersInput, StoreUncheckedUpdateWithoutOffersInput>
    create: XOR<StoreCreateWithoutOffersInput, StoreUncheckedCreateWithoutOffersInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutOffersInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutOffersInput, StoreUncheckedUpdateWithoutOffersInput>
  }

  export type StoreUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawOffers?: RawOfferUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawOffers?: RawOfferUncheckedUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUncheckedUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type VariantUpsertWithoutOffersInput = {
    update: XOR<VariantUpdateWithoutOffersInput, VariantUncheckedUpdateWithoutOffersInput>
    create: XOR<VariantCreateWithoutOffersInput, VariantUncheckedCreateWithoutOffersInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutOffersInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutOffersInput, VariantUncheckedUpdateWithoutOffersInput>
  }

  export type VariantUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type VariantUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutOfferInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutOfferInput, PriceHistoryUncheckedUpdateWithoutOfferInput>
    create: XOR<PriceHistoryCreateWithoutOfferInput, PriceHistoryUncheckedCreateWithoutOfferInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutOfferInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutOfferInput, PriceHistoryUncheckedUpdateWithoutOfferInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutOfferInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutOfferInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    id?: StringFilter<"PriceHistory"> | string
    offerId?: StringFilter<"PriceHistory"> | string
    priceBase?: FloatFilter<"PriceHistory"> | number
    priceShipping?: FloatNullableFilter<"PriceHistory"> | number | null
    priceTotal?: FloatNullableFilter<"PriceHistory"> | number | null
    currency?: StringFilter<"PriceHistory"> | string
    recordedAt?: DateTimeFilter<"PriceHistory"> | Date | string
  }

  export type OfferCreateWithoutPriceHistoryInput = {
    id?: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutOffersInput
    variant: VariantCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutPriceHistoryInput = {
    id?: string
    variantId: string
    storeId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferCreateOrConnectWithoutPriceHistoryInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutPriceHistoryInput, OfferUncheckedCreateWithoutPriceHistoryInput>
  }

  export type OfferUpsertWithoutPriceHistoryInput = {
    update: XOR<OfferUpdateWithoutPriceHistoryInput, OfferUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<OfferCreateWithoutPriceHistoryInput, OfferUncheckedCreateWithoutPriceHistoryInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutPriceHistoryInput, OfferUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type OfferUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOffersNestedInput
    variant?: VariantUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateWithoutRawOffersInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutRawOffersInput = {
    id?: string
    name: string
    slug: string
    websiteUrl: string
    shopScore?: number
    logoUrl?: string | null
    isAffiliate?: boolean
    isActive?: boolean
    syncEnabled?: boolean
    syncInterval?: number
    consecutiveFailures?: number
    expirationDays?: number
    integrationType?: string
    affiliateNetwork?: string | null
    programId?: string | null
    trackingEnabled?: boolean
    deeplinkTemplate?: string | null
    isDemo?: boolean
    lastSuccessfulSyncAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutStoreInput
    syncErrors?: SyncErrorUncheckedCreateNestedManyWithoutStoreInput
    syncRuns?: SyncRunUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutRawOffersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutRawOffersInput, StoreUncheckedCreateWithoutRawOffersInput>
  }

  export type StoreUpsertWithoutRawOffersInput = {
    update: XOR<StoreUpdateWithoutRawOffersInput, StoreUncheckedUpdateWithoutRawOffersInput>
    create: XOR<StoreCreateWithoutRawOffersInput, StoreUncheckedCreateWithoutRawOffersInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutRawOffersInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutRawOffersInput, StoreUncheckedUpdateWithoutRawOffersInput>
  }

  export type StoreUpdateWithoutRawOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutRawOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    shopScore?: IntFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAffiliate?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    syncEnabled?: BoolFieldUpdateOperationsInput | boolean
    syncInterval?: IntFieldUpdateOperationsInput | number
    consecutiveFailures?: IntFieldUpdateOperationsInput | number
    expirationDays?: IntFieldUpdateOperationsInput | number
    integrationType?: StringFieldUpdateOperationsInput | string
    affiliateNetwork?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingEnabled?: BoolFieldUpdateOperationsInput | boolean
    deeplinkTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutStoreNestedInput
    syncErrors?: SyncErrorUncheckedUpdateManyWithoutStoreNestedInput
    syncRuns?: SyncRunUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductCreateManyBrandInput = {
    id?: string
    categoryId?: string | null
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    brandId: string
    name: string
    model: string
    slug: string
    description?: string | null
    gender?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantCreateManyProductInput = {
    id?: string
    colorRaw?: string | null
    colorNormalized?: string | null
    sizeRaw?: string | null
    sizeValue?: string | null
    sizeSystem?: string | null
    sku?: string | null
    gtin?: string | null
    mpn?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    colorRaw?: NullableStringFieldUpdateOperationsInput | string | null
    colorNormalized?: NullableStringFieldUpdateOperationsInput | string | null
    sizeRaw?: NullableStringFieldUpdateOperationsInput | string | null
    sizeValue?: NullableStringFieldUpdateOperationsInput | string | null
    sizeSystem?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateManyVariantInput = {
    id?: string
    storeId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOffersNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateManyStoreInput = {
    id?: string
    variantId: string
    externalProductId: string
    externalVariantId?: string
    url: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    status?: string
    stockStatus?: string
    needsManualReview?: boolean
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawOfferCreateManyStoreInput = {
    id?: string
    syncRunId?: string | null
    externalId: string
    externalVariantId?: string
    rawTitle: string
    rawBrand?: string | null
    rawColor?: string | null
    rawSize?: string | null
    rawGtin?: string | null
    rawMpn?: string | null
    rawSku?: string | null
    url: string
    price: number
    shipping?: number | null
    stock?: string | null
    rawPayload: string
    status?: string
    similarityScore?: number | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    confidence?: string | null
    matchedBy?: string | null
    matchingMethod?: string | null
  }

  export type SyncErrorCreateManyStoreInput = {
    id?: string
    syncRunId: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type SyncRunCreateManyStoreInput = {
    id?: string
    sourceType: string
    status?: string
    itemsReceived?: number
    itemsProcessed?: number
    itemsCreated?: number
    itemsUpdated?: number
    itemsFailed?: number
    errorCount?: number
    missingSkuCount?: number
    invalidPriceCount?: number
    outOfStockCount?: number
    durationMs?: number | null
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type OfferUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: VariantUpdateOneRequiredWithoutOffersNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantId?: StringFieldUpdateOperationsInput | string
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    stockStatus?: StringFieldUpdateOperationsInput | string
    needsManualReview?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawOfferUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RawOfferUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RawOfferUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: StringFieldUpdateOperationsInput | string
    rawTitle?: StringFieldUpdateOperationsInput | string
    rawBrand?: NullableStringFieldUpdateOperationsInput | string | null
    rawColor?: NullableStringFieldUpdateOperationsInput | string | null
    rawSize?: NullableStringFieldUpdateOperationsInput | string | null
    rawGtin?: NullableStringFieldUpdateOperationsInput | string | null
    rawMpn?: NullableStringFieldUpdateOperationsInput | string | null
    rawSku?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    similarityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    matchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    matchingMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncErrorUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncRun?: SyncRunUpdateOneRequiredWithoutSyncErrorsNestedInput
  }

  export type SyncErrorUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncErrorUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncRunId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncRunUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncErrors?: SyncErrorUpdateManyWithoutSyncRunNestedInput
  }

  export type SyncRunUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncErrors?: SyncErrorUncheckedUpdateManyWithoutSyncRunNestedInput
  }

  export type SyncRunUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsReceived?: IntFieldUpdateOperationsInput | number
    itemsProcessed?: IntFieldUpdateOperationsInput | number
    itemsCreated?: IntFieldUpdateOperationsInput | number
    itemsUpdated?: IntFieldUpdateOperationsInput | number
    itemsFailed?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    missingSkuCount?: IntFieldUpdateOperationsInput | number
    invalidPriceCount?: IntFieldUpdateOperationsInput | number
    outOfStockCount?: IntFieldUpdateOperationsInput | number
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SyncErrorCreateManySyncRunInput = {
    id?: string
    storeId: string
    externalId?: string | null
    errorCode: string
    message: string
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type SyncErrorUpdateWithoutSyncRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSyncErrorsNestedInput
  }

  export type SyncErrorUncheckedUpdateWithoutSyncRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncErrorUncheckedUpdateManyWithoutSyncRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateManyOfferInput = {
    id?: string
    priceBase: number
    priceShipping?: number | null
    priceTotal?: number | null
    currency?: string
    recordedAt?: Date | string
  }

  export type PriceHistoryUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceBase?: FloatFieldUpdateOperationsInput | number
    priceShipping?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BrandCountOutputTypeDefaultArgs instead
     */
    export type BrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantCountOutputTypeDefaultArgs instead
     */
    export type VariantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SyncRunCountOutputTypeDefaultArgs instead
     */
    export type SyncRunCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SyncRunCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferCountOutputTypeDefaultArgs instead
     */
    export type OfferCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandDefaultArgs instead
     */
    export type BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantDefaultArgs instead
     */
    export type VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SyncRunDefaultArgs instead
     */
    export type SyncRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SyncRunDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SyncErrorDefaultArgs instead
     */
    export type SyncErrorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SyncErrorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferDefaultArgs instead
     */
    export type OfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceHistoryDefaultArgs instead
     */
    export type PriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RawOfferDefaultArgs instead
     */
    export type RawOfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RawOfferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalyticsEventDefaultArgs instead
     */
    export type AnalyticsEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalyticsEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchingDecisionDefaultArgs instead
     */
    export type MatchingDecisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchingDecisionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AffiliateConversionDefaultArgs instead
     */
    export type AffiliateConversionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AffiliateConversionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}