<template>
  <TextInput
    name="name"
    label="Name"
    ref="name"/>
  <TextInput
    v-for="field in fields"
    :name="field"
    :label="field"
    :key="field"
    :ref="field"/>
  <TextInput
    name="other_information"
    label="Other Information"
    ref="other_information"/>
  <OrangeButton :onClick="submitForm" text="Submit Form"/>
</template>

<script>
import TextInput from "@/components/inputs/TextInput.vue";
import OrangeButton from "@/components/buttons/OrangeButton.vue";
import { getUrl } from "@/services";
import axios from "axios";

export default {
  name: "PlayerForm",
  components: { TextInput, OrangeButton },
  mounted() {
    const roomId = this.$route.params.id;
    const url = getUrl(`bingo/${roomId}/fields`);
    fetch(url)
      .then(response => {
        switch (response.status) {
          case 200:
          case 201:
            return response.json();
          default:
            throw new Error("Bad method!");
        }
      })
      .then(data => {
        this.fields = data.fields.map(field => field.content);
      })
      .catch(err => {
        this.$swal.fire('Oops...', 'Get Form Failed!', 'error');
        console.log(err);
      })
  },
  data() {
    return {
      fields: []
    }
  },
  methods: {
    submitForm() {
      this.$swal.fire({
        title: "Are you done filling up the form?",
        text: "You won't be able to edit the form again.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#009645',
        cancelButtonColor: '#D42E12',
        confirmButtonText: "Yes, I'm sure!"
      }).then(result => {
        if (result.isConfirmed) {
          this.sendPayload();
        }
      });
    },
    sendPayload() {
      const payload = {};
      for (let field of this.fields) {
        payload[field] = this.$refs[field].value;
      }
      payload.name = this.$refs.name.value;
      payload.other_information = this.$refs.other_information.value;

      const roomId = this.$route.params.id;
      const url = getUrl(`bingo/${roomId}/join`);
      axios.post(url, payload, {})
        .then(response => {
          switch (response.status) {
            case 200:
            case 201:
              return response.data;
            case 409:
              this.$swal.fire("Oops...", "Someone with that name has already joined! Please use a different name!", "error")
              throw new Error("Bad method!");
            default:
              throw new Error("Bad method!");
          }
        })
        .then(() => {
          localStorage.setItem("player_name", this.$refs.name.value);
          this.$forceUpdate();
        })
        .catch(err => {
          console.log(err);
          this.$swal.fire("Oops...", "The form could not be submitted for whatever reason!", "error");
        })
    }
  }
}
</script>