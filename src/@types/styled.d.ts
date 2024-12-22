import 'styled-components'
import { type DefaultThemes } from '../Styles/theme/default'

type ThemeType = typeof DefaultThemes

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
