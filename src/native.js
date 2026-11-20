import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { App } from '@capacitor/app';
import { TextRecognition } from '@capacitor-mlkit/text-recognition';
window.NATIVE = Capacitor.isNativePlatform() ? { Capacitor, Camera, CameraResultType, CameraSource, Filesystem, Directory, Encoding, LocalNotifications, Share, App, TextRecognition } : null;
