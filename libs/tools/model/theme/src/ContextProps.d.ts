export interface ContextProps {
  /** Whether descendants should be displayed with the quiet style. */
  isQuiet?: boolean;
  /** Whether descendants should be displayed with the emphasized style. */
  isEmphasized?: boolean;
  /** Whether descendants should be disabled. */
  isDisabled?: boolean;
  /** Whether descendants should be displayed with the required style. */
  isRequired?: boolean;
  /** Whether descendants should be read only. */
  isReadOnly?: boolean;
  /** Whether descendants should be displayed with the validation state style. */
  validationState?: ValidationState;
}
