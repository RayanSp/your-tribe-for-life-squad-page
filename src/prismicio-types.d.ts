// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = NavbarSlice | WelkomSlice;

/**
 * Content for homePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *homePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type MainDocumentDataSlicesSlice = MembersSlice;

/**
 * Content for Main documents
 */
interface MainDocumentData {
  /**
   * Slice Zone field in *Main*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: main.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MainDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Main*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: main.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Main*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: main.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Main*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: main.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Main document from Prismic
 *
 * - **API ID**: `main`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MainDocumentData>, "main", Lang>;

export type AllDocumentTypes = HomepageDocument | MainDocument;

/**
 * Primary content in *Members → Items*
 */
export interface MembersSliceDefaultItem {
  /**
   * Name field in *Members → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: members.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Image field in *Members → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: members.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Members → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: members.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Members Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MembersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MembersSliceDefaultItem>
>;

/**
 * Slice variation for *Members*
 */
type MembersSliceVariation = MembersSliceDefault;

/**
 * Members Shared Slice
 *
 * - **API ID**: `members`
 * - **Description**: Members
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MembersSlice = prismic.SharedSlice<
  "members",
  MembersSliceVariation
>;

/**
 * Primary content in *Navbar → Items*
 */
export interface NavbarSliceDefaultItem {
  /**
   * NavName field in *Navbar → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.items[].navname
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  navname: prismic.LinkField;
}

/**
 * Default variation for Navbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<NavbarSliceDefaultItem>
>;

/**
 * Slice variation for *Navbar*
 */
type NavbarSliceVariation = NavbarSliceDefault;

/**
 * Navbar Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: Navbar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSlice = prismic.SharedSlice<"navbar", NavbarSliceVariation>;

/**
 * Primary content in *Welkom → Items*
 */
export interface WelkomSliceDefaultItem {
  /**
   * squadImage field in *Welkom → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: welkom.items[].squadimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  squadimage: prismic.ImageField<never>;

  /**
   * squadLink field in *Welkom → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: welkom.items[].squadlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  squadlink: prismic.LinkField;

  /**
   * squadName field in *Welkom → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welkom.items[].squadname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  squadname: prismic.KeyTextField;
}

/**
 * Default variation for Welkom Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelkomSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<WelkomSliceDefaultItem>
>;

/**
 * Slice variation for *Welkom*
 */
type WelkomSliceVariation = WelkomSliceDefault;

/**
 * Welkom Shared Slice
 *
 * - **API ID**: `welkom`
 * - **Description**: Welkom
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelkomSlice = prismic.SharedSlice<"welkom", WelkomSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MainDocument,
      MainDocumentData,
      MainDocumentDataSlicesSlice,
      AllDocumentTypes,
      MembersSlice,
      MembersSliceDefaultItem,
      MembersSliceVariation,
      MembersSliceDefault,
      NavbarSlice,
      NavbarSliceDefaultItem,
      NavbarSliceVariation,
      NavbarSliceDefault,
      WelkomSlice,
      WelkomSliceDefaultItem,
      WelkomSliceVariation,
      WelkomSliceDefault,
    };
  }
}
