import { faker } from "@faker-js/faker";
export const ApplicationScreens = {
  HOME_TAB: "HOME_TAB",
  ADD_TAB: "ADD_TAB",
  PROFILE_TAB: "PROFILE_TAB",
  MENU_TAB: "MENU_TAB",
  PRODUCTS_SCREEN: "PRODUCTS_SCREEN",
  PRODUCT_ITEM_SCREEN: "PRODUCT_ITEM_SCREEN",
  ADD_PRODUCT_SCREEN: "ADD_PRODUCT_SCREEN",
  PROFILE_SCREEN: "PROFILE_SCREEN",
  MENU_SCREEN: "MENU_SCREEN",
};
export const FONTS = {
  WorkSans: "WorkSans",
  WorkSansItalic: "WorkSansItalic",
  RobotoSlab: "RobotoSlab",
};
export const generateFakeProducts = () => {
  const products = [];
  for (let i = 0; i < 15; i++) {
    const name = faker.commerce.product();
    const description = faker.commerce.productDescription();
    const image = faker.image.urlPicsumPhotos();
    const category = faker.commerce.department();
    const id = faker.string.uuid();
    const lat = faker.location.latitude();
    const lng = faker.location.longitude();
    const price = faker.commerce.price();
    products.push({ id, name, description, image, category, lat, lng, price });
  }
  return products;
};
