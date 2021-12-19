export interface ModularCssOptions {
  /**
   * Location to write the generated CSS file to, relative to output.path just like output.filename
   */
  css?: string;
  /**
   * Location to write out the JSON mapping file to, relative to output.path just like output.filename
   */
  json?: string;

  /**
   * By default this plugin will create both a default export and named exports for each class in a CSS file. You can disable this by setting namedExports to false.
   */
  namedExports: boolean;
}
