// in src/App.js
import * as React from "react";
import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { CollectionList, CollectionCreate, CollectionEdit } from './Components/collection';
import { GenderList, GenderCreate, GenderEdit, GenderShow } from './Components/gender';

const dataProvider = simpleRestProvider("http://127.0.0.1:8000");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="directors" list={ListGuesser} create={EditGuesser} show={ShowGuesser} />
    <Resource name="categories" list={ListGuesser} create={EditGuesser} />
    <Resource name="countries" list={ListGuesser} create={EditGuesser} />
    <Resource name="collections" list={CollectionList} create={CollectionCreate} edit={CollectionEdit} />
    <Resource name="genders" list={GenderList} create={GenderCreate} show={GenderShow}/>
  </Admin>
);

export default App;
