import { defineStore } from "pinia";
import { ref } from "vue";

export const useFileStore = defineStore("file", () => {
  let files = ref(new Array<File>());

  function push(site: File) {
    files.value.push(site);
  }

  function deleteSite(file: File) {
    const index = files.value.findIndex((currentFile) => {
      return currentFile.name === currentFile.name;
    });
    if (index !== -1) {
      files.value.splice(index, 1);
    }
  }

  function size(): number {
    return files.value.length;
  }

  function clear() {
    files.value = [];
  }

  return { files, push, deleteSite, size, clear };
});
