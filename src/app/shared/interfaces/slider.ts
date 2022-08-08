export interface Slider {
  fields: {
    sliderTitle: string;
    isImageSetAsBackground: boolean;
    sliderBackground: {
      fields: {
        title: string;
        description: string;
        file: {
          fileName: string;
          url: string;
        };
      };
    };
  };
}
