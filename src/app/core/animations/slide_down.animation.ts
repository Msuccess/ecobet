import {
  trigger,
  style,
  transition,
  animate,
  group,
  state,
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideDownUp', [
    transition(':enter', [style({ height: 0 }), animate(500)]),
    transition(':leave', [animate(500, style({ height: 0 }))]),
  ]),
];
