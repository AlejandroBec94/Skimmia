import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MapsComponent} from './@shared/maps/maps.component';
import {IndexComponent} from './main/index/index.component';
import {AgmCoreModule} from '@agm/core';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule, MatSnackBarModule,
  MatStepperModule, MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BaseDirective2, MediaChange, MediaMarshaller, StyleBuilder, StyleUtils, FlexLayoutModule} from '@angular/flex-layout';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {PlayerComponent} from './@shared/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    IndexComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNmHQ0SQ3WjwwzrS4OsT1GpgWtQ80fZs4'
    }),
    ReactiveFormsModule,
    MatToolbarModule,
    NgxAudioPlayerModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
