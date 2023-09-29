import { Directive, ElementRef, EventEmitter, HostListener, Output, ChangeDetectionStrategy } from '@angular/core';

@Directive({
  selector: '[appConvertToThumbnail]'
})
export class ConvertToThumbnailDirective {
  @Output() imageUploaded = new EventEmitter<string>();
  @HostListener('change', ['$event.target.files']) onFileChange(files: FileList) {
    const file = files.item(0);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const aspectRatio = img.width / img.height;

          let width = 300;
          let height = 300;

          if (aspectRatio < 1) {
            width = 300 * aspectRatio;
          } else {
            height = 300 / aspectRatio;
          }

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);

          const thumbnailBase64 = canvas.toDataURL('image/jpeg');
          console.log(thumbnailBase64);
          this.imageUploaded.emit(thumbnailBase64);
        };
      };

      reader.readAsDataURL(file);
    }
  }

  constructor(private el: ElementRef) {
  }
}
