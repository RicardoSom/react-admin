import React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  Create,
  SimpleForm,
  Show,
  ShowButton,
  SimpleShowLayout,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  useDataProvider,
  useQuery,
  Query,
  AutocompleteInput,
} from "react-admin";

import axios from "axios";

const CollectionTitle = ({ record }) => {
  return <span>Sintoma {record ? `"${record.name}"` : ""}</span>;
};

export const CollectionList = (props) => (
  <List {...props} title="Biblioteca">
    <Datagrid rowClick="edit">
      <TextField source="title" label="Título" />
      <TextField source="gender_desc" label="Género" />
      <TextField source="country_desc" label="País" />
      <TextField source="director_desc" label="Director" />
      <TextField source="category_desc" label="Categoria" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CollectionCreate = (props) => (
  <Create {...props} successMessage="Colleción creada">
    <SimpleForm redirect="show">
      <TextInput source="title" label="Título" />
      <ReferenceInput
        label="Categoria"
        source="category_id"
        reference="categories"
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput label="Género" source="gender_id" reference="genders">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput label="País" source="country_id" reference="countries">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="Director"
        source="director_id"
        reference="directors"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const CollectionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput source="title" label="Título" />
      <ReferenceInput
        label="Categoria"
        source="category_id"
        reference="categories"
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput label="Género" source="gender_id" reference="genders">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput label="País" source="country_id" reference="countries">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="Director"
        source="director_id"
        reference="directors"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const CollectionShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" label="Título" />
      <TextField source="gender_desc" label="Género" />
      <TextField source="country_desc" label="País" />
      <TextField source="director_desc" label="Director" />
      <TextField source="category_desc" label="Categoria" />
    </SimpleShowLayout>
  </Show>
);
