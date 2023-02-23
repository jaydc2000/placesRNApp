const GOOGLE_API_KEY = 'AIzaSyB_0t4ODy1VMPX49E08191DavsyLExEJMY';


export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
  center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  console.log({imagePreviewUrl})
  return imagePreviewUrl;
}
