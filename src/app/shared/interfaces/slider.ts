export interface Slider {
  fields: {
    sliderTitle: string;
    isImageSetAsBackground: boolean;
    eventPageButton: boolean | string;
    sliderBackground: ImageProps;
  };
}

export interface ImageProps {
  fields: {
    title: string;
    description: string;
    file: {
      fileName: string;
      url: string;
    };
  };
}
