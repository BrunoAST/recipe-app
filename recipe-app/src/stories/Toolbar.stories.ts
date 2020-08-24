import { ToolbarComponent } from './../app/shared/toolbar/toolbar.component';
import { ToolbarModule } from './../app/shared/toolbar/toolbar.module';
import { moduleMetadata } from '@storybook/angular';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';


export default {
  title: 'Recipe-App/Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [ToolbarModule],
    }),
  ],
} as Meta;

export const withResponsiveness = () => ({
  component: ToolbarComponent
});
