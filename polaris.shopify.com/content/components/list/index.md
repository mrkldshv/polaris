---
name: List
category: Lists and tables
platforms:
  - android
  - ios
  - web
keywords:
  - bulleted lists
  - numbered lists
  - icon lists
  - list items
  - text lists
  - text-only lists
  - ios
  - android
examples:
  - fileName: bulleted-list.tsx
    title: Bulleted list
    description: >-
      Use for a text-only list of related items that don’t need to be in a
      specific order and don’t require an icon or other
      indicator.undefinedundefined
  - fileName: numbered-list.tsx
    title: Numbered list
    description: >-
      Use for a text-only list of related items when an inherent order,
      priority, or sequence needs to be communicated.undefinedundefined
---

# List

Lists display a set of related text-only content. Each list item begins with a bullet or a number.

---

## Best practices

Lists should:

- Break up chunks of related content to make the information easier for
  merchants to scan
- Be phrased consistently (try to start each item with a noun or a
  verb and be consistent with each item)
- Not be used for lists where the entire item represents an action

---

## Content guidelines

### List items

Every item in a list should:

- Start with a capital letter
- Not use commas or semicolons at the end of each line

<!-- usagelist -->

#### Do

- Red
- Yellow
- Blue

#### Don’t

- Red;
- Yellow;
- Blue.

<!-- end -->

- Be written in sentence case

<!-- usagelist -->

#### Do

- Item one
- Item two
- Item three

#### Don’t

- Item One
- Item Two
- Item Three

<!-- end -->

---

## Related components

- To create a list of checkboxes or radio buttons, [use the choice list component](https://polaris.shopify.com/components/forms/choice-list)
- To present a collection of objects of the same type such as customers, products, or orders, [use the resource list component](https://polaris.shopify.com/components/lists-and-tables/resource-list)
- When text labels for each item are useful for describing the content, [use the Description List component](https://polaris.shopify.com/components/lists-and-tables/description-list)

---

## Accessibility

<!-- content-for: android -->

See Material Design and development documentation about accessibility for Android:

- [Accessible design on Android](https://material.io/design/usability/accessibility.html)
- [Accessible development on Android](https://developer.android.com/guide/topics/ui/accessibility/)

<!-- /content-for -->

<!-- content-for: ios -->

See Apple’s Human Interface Guidelines and API documentation about accessibility for iOS:

- [Accessible design on iOS](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessibility/)
- [Accessible development on iOS](https://developer.apple.com/accessibility/ios/)

<!-- /content-for -->

<!-- content-for: web -->

The list component outputs list items (`<li>`) inside a list wrapper (`<ul>` for bullet lists or `<ol>` for numbered lists). By default, list items are conveyed as a group of related elements to assistive technology users.

To group items for layout only, consider using the [stack component](https://polaris.shopify.com/components/structure/stack).

<!-- /content-for -->