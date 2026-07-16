<script lang="ts">
    let {
        windowMenu = $bindable(),
        windowModal = $bindable(),
    }: {
        windowMenu: boolean;
        windowModal: boolean;
    } = $props();
</script>

<div class="container-window">
    <div
        class="window"
        class:window--menu={windowMenu}
        class:window--modal={windowModal}
    >
        <header class="window__header"></header>
        <div class="window__container"></div>
        <footer class="window__footer"></footer>
    </div>
</div>


<!-- Esta es una PaymentRequestUpdateEvent | Test Project -->
