export type CategoryArticleType = {
  slug_name: string;
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  uri: string;
  url: string;
  short_url: string;
  byline: string;
  thumbnail_standard: string;
  item_type: string;
  source: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  headline: string;
  des_facet: string;
  org_facet: string;
  per_facet: Array<unknown>;
  geo_facet: Array<unknown>;
  blog_name: string;
  related_urls: { suggested_link_text: string; url: string }[];
  multimedia: {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    capyion: string;
    copyright: string;
  }[];
};

type Multimedia = {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: { xlarge: string; xlargewidth: number; xlargeheight: number };
  crop_name: string;
};

type Headline = {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
};

type Keywords = { name: string; value: string; rank: number; major: string };
type Byline = {
  original: string;
  organization: string;
  person: {
    firstname: string;
    middlename: string;
    lastname: string;
    qualifier: string;
    title: string;
    role: string;
    organization: string;
    rank: number;
  }[];
};

export type SearchArticleType = {
  web_url: string;
  snippet: string;
  print_page: number;
  print_section: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keywords[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
};

type Media = {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: string;
  "media-metadata": Array<{
    url: string;
    format: string;
    height: number;
    width: number;
  }>;
};

export type PopularArticleType = {
  url: string;
  adx_keywords: string;
  column: string;
  section: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  published_date: string;
  source: string;
  id: number;
  asset_id: number;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  uri: string;
};
