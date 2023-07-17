// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for home documents */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice =
  | ScreenshotGallerySlice
  | ImageSlice
  | IntroductionSlice
  | HeroBannerSlice;
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Post documents */
interface PostDocumentData {
  /**
   * Page Title field in *Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Page Title...
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Excerpt field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: excerpt
   * - **API ID Path**: post.excerpt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  excerpt: prismic.RichTextField;
  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  body: prismic.SliceZone<PostDocumentDataBodySlice>;
}
/**
 * Primary content in Post → Slice Zone → `text` → Primary
 *
 */
interface PostDocumentDataBodyTextSlicePrimary {
  /**
   * Rich Text field in *Post → Slice Zone → `text` → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Enter your text...
   * - **API ID Path**: post.body[].text.primary.rich_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  rich_text: prismic.RichTextField;
}
export type PostDocumentDataBodyTextSlice = prismic.Slice<
  "text",
  Simplify<PostDocumentDataBodyTextSlicePrimary>,
  never
>;
/**
 * Primary content in Post → Slice Zone → `code_snippet` → Primary
 *
 */
interface PostDocumentDataBodyCodeSnippetSlicePrimary {
  /**
   * Code Snippet field in *Post → Slice Zone → `code_snippet` → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Enter code snippet...
   * - **API ID Path**: post.body[].code_snippet.primary.code_snippet
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  code_snippet: prismic.RichTextField;
}
export type PostDocumentDataBodyCodeSnippetSlice = prismic.Slice<
  "code_snippet",
  Simplify<PostDocumentDataBodyCodeSnippetSlicePrimary>,
  never
>;
/**
 * Primary content in Post → Slice Zone → `highlighted_text` → Primary
 *
 */
interface PostDocumentDataBodyHighlightedTextSlicePrimary {
  /**
   * Highlight Title field in *Post → Slice Zone → `highlighted_text` → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Highlight Title...
   * - **API ID Path**: post.body[].highlighted_text.primary.highlight_title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  highlight_title: prismic.TitleField;
  /**
   * Highlight Text field in *Post → Slice Zone → `highlighted_text` → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Highlight Text...
   * - **API ID Path**: post.body[].highlighted_text.primary.highlight_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  highlight_text: prismic.RichTextField;
}
export type PostDocumentDataBodyHighlightedTextSlice = prismic.Slice<
  "highlighted_text",
  Simplify<PostDocumentDataBodyHighlightedTextSlicePrimary>,
  never
>;
/**
 * Primary content in Post → Slice Zone → `image` → Primary
 *
 */
interface PostDocumentDataBodyImageSlicePrimary {
  /**
   * Image field in *Post → Slice Zone → `image` → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.body[].image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
export type PostDocumentDataBodyImageSlice = prismic.Slice<
  "image",
  Simplify<PostDocumentDataBodyImageSlicePrimary>,
  never
>;
/**
 * Slice for *Post → Slice Zone*
 *
 */
type PostDocumentDataBodySlice =
  | PostDocumentDataBodyTextSlice
  | PostDocumentDataBodyCodeSnippetSlice
  | PostDocumentDataBodyHighlightedTextSlice
  | PostDocumentDataBodyImageSlice;
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
export type AllDocumentTypes = HomeDocument | PostDocument;
/**
 * Primary content in HeroBanner → Primary
 *
 */
interface HeroBannerSliceDefaultPrimary {
  /**
   * Title field in *HeroBanner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: hero_banner.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *HeroBanner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your feature
   * - **API ID Path**: hero_banner.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Image field in *HeroBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for HeroBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroBannerSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HeroBanner*
 *
 */
type HeroBannerSliceVariation = HeroBannerSliceDefault;
/**
 * HeroBanner Shared Slice
 *
 * - **API ID**: `hero_banner`
 * - **Description**: `HeroBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroBannerSlice = prismic.SharedSlice<
  "hero_banner",
  HeroBannerSliceVariation
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Introduction → Primary
 *
 */
interface IntroductionSliceDefaultPrimary {
  /**
   * Title field in *Introduction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: introduction.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *Introduction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Default variation for Introduction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Introduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroductionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroductionSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in Introduction → Primary
 *
 */
interface IntroductionSliceBluePrimary {
  /**
   * Title field in *Introduction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: introduction.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *Introduction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Color field in *Introduction → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: blue
   * - **API ID Path**: introduction.primary.color
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  color: prismic.SelectField<"blue" | "black", "filled">;
}
/**
 * Blue variation for Introduction Slice
 *
 * - **API ID**: `blue`
 * - **Description**: `Introduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroductionSliceBlue = prismic.SharedSliceVariation<
  "blue",
  Simplify<IntroductionSliceBluePrimary>,
  never
>;
/**
 * Slice variation for *Introduction*
 *
 */
type IntroductionSliceVariation =
  | IntroductionSliceDefault
  | IntroductionSliceBlue;
/**
 * Introduction Shared Slice
 *
 * - **API ID**: `introduction`
 * - **Description**: `Introduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroductionSlice = prismic.SharedSlice<
  "introduction",
  IntroductionSliceVariation
>;
/**
 * Item in ScreenshotGallery → Items
 *
 */
export interface ScreenshotGallerySliceDefaultItem {
  /**
   * Screenshot field in *ScreenshotGallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: screenshot_gallery.items[].screenshot
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  screenshot: prismic.ImageField<never>;
  /**
   * Link field in *ScreenshotGallery → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: screenshot_gallery.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for ScreenshotGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ScreenshotGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ScreenshotGallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ScreenshotGallerySliceDefaultItem>
>;
/**
 * Slice variation for *ScreenshotGallery*
 *
 */
type ScreenshotGallerySliceVariation = ScreenshotGallerySliceDefault;
/**
 * ScreenshotGallery Shared Slice
 *
 * - **API ID**: `screenshot_gallery`
 * - **Description**: `ScreenshotGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ScreenshotGallerySlice = prismic.SharedSlice<
  "screenshot_gallery",
  ScreenshotGallerySliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      PostDocumentData,
      PostDocumentDataBodyTextSlicePrimary,
      PostDocumentDataBodyTextSlice,
      PostDocumentDataBodyCodeSnippetSlicePrimary,
      PostDocumentDataBodyCodeSnippetSlice,
      PostDocumentDataBodyHighlightedTextSlicePrimary,
      PostDocumentDataBodyHighlightedTextSlice,
      PostDocumentDataBodyImageSlicePrimary,
      PostDocumentDataBodyImageSlice,
      PostDocumentDataBodySlice,
      PostDocument,
      AllDocumentTypes,
      HeroBannerSliceDefaultPrimary,
      HeroBannerSliceDefault,
      HeroBannerSliceVariation,
      HeroBannerSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceVariation,
      ImageSlice,
      IntroductionSliceDefaultPrimary,
      IntroductionSliceDefault,
      IntroductionSliceBluePrimary,
      IntroductionSliceBlue,
      IntroductionSliceVariation,
      IntroductionSlice,
      ScreenshotGallerySliceDefaultItem,
      ScreenshotGallerySliceDefault,
      ScreenshotGallerySliceVariation,
      ScreenshotGallerySlice,
    };
  }
}