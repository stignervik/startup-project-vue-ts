<template>
  <v-container>
    <v-file-input
      v-model="state.files"
      clearable
      show-size
      density="compact"
      label="Upload file"
      @update:modelValue="updateFiles"
    ></v-file-input>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useFileStore } from "../store/filestore";

const state = reactive({
  files: new Array<File>(),
});

const fileStore = useFileStore();

onMounted(() => {
  state.files = fileStore.files;
});

function updateFiles() {
  fileStore.clear();
  console.log("Update files...  ", state.files.length);
  state.files.forEach((file: File) => {
    console.log(`File ${file.name}`);
    fileStore.push(file);
  });
}
</script>
