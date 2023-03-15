<script lang="ts">
  /** @type {import('./$types').PageData} */

  export let form:any
</script>

<div class="section is-medium has-text-centered">
  <div class="title">Log In</div>
  <div class="columns">
    <div class="column is-1-tablet is-3-desktop"></div>
    <form method="post" class="column is-10-tablet is-6-desktop">
      <div class="field">
        <div class="control">
          <input name="email" class="input is-danger" type="email" placeholder="Email">
        </div>
      </div>
      <div class="field">
        <div class="control">
            <input name="password" class="input is-danger" type="password" placeholder="Password" />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-dark" type="submit">Log In</button>
        </div>
      </div>
      { #if form && !form?.data.success }
        <p>{form?.data.message}</p>
      { /if }
    </form>
    <div class="column is-1-tablet is-3-desktop"></div>
  </div>
</div>