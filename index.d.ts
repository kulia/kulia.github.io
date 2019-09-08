declare module 'canvas-nest.js' {
  interface configType {
    /**
     * Line color, default: '0,0,0'; three numbers are (R, G, B), note, split
     */
    color?: string;
  
    /**
     * The total number of lines, default: 150
     */
    count?: number;
  
    /**
     * The z-index attribute of the background, the css attribute is used to control the location of the layer, default: -1
     */
    zIndex?: number;
  
    /**
     * Line transparency (0~1), default: 0.5
     */
    opacity?: number;
  }

  class CanvasNest {
    constructor(element: Element, config?: configType)
    destroy(): void;
  }

  export default CanvasNest;
}