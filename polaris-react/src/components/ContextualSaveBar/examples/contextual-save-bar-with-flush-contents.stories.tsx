<div style={{height: '250px'}}>
  <Frame
    logo={{
      width: 124,
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
    }}
  >
    <ContextualSaveBar
      alignContentFlush
      message="Unsaved changes"
      saveAction={{
        onAction: () => console.log('add form submit logic'),
      }}
      discardAction={{
        onAction: () => console.log('add clear form logic'),
      }}
    />
  </Frame>
</div>