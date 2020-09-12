// in src/App.js
import * as React from "react";
import simpleRestProvider from "ra-data-simple-rest";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import {
  CollectionList,
  CollectionCreate,
  CollectionEdit,
  CollectionShow
} from "./Components/collection";
import {
  GenderList,
  GenderCreate,
  GenderEdit,
  GenderShow,
} from "./Components/gender";
import {
  DirectorList,
  DirectorCreate,
  DirectorEdit,
  DirectorShow,
} from "./Components/director";
import {
  CategoryList,
  CategoryCreate,
  CategoryEdit,
  CategoryShow,
} from "./Components/cateogry";
import {
  CountryList,
  CountryCreate,
  CountryEdit,
  CountryShow,
} from "./Components/country";

const dataProvider = simpleRestProvider("http://127.0.0.1:8000");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="directors"
      list={DirectorList}
      create={DirectorCreate}
      edit={DirectorEdit}
      show={DirectorShow}
      options={{ label: "Directores" }}
    />
    <Resource
      name="categories"
      list={CategoryList}
      create={CategoryCreate}
      edit={CategoryEdit}
      show={CategoryShow}
      options={{ label: "Categorias" }}
    />
    <Resource
      name="countries"
      list={CountryList}
      create={CountryCreate}
      edit={CountryEdit}
      show={CountryShow}
      options={{ label: "Países" }}
    />
    <Resource
      name="collections"
      list={CollectionList}
      create={CollectionCreate}
      edit={CollectionEdit}
      show={CollectionShow}
      options={{ label: "Colleciones" }}
    />
    <Resource
      name="genders"
      list={GenderList}
      create={GenderCreate}
      show={GenderShow}
      options={{ label: "Géneros" }}
    />
  </Admin>
);

export default App;
