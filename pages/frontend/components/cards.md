TODO unfinished

# Cards

It's surprisingly hard to build accessible cards that act and feel right in multiple contexts and are consistent across the whole app. Their minutiae are often very opinionated and are not evident from the design files or haven't been thought about during the design process. A frustration from inconsistent card behavior (even on the same page!) led to writing this guide which aspires to unify the approach and find the best practices.  

## Sizing
First and foremost the most important thing when implementing a card is to determine its sizing needs in the context of your application. The implementation differs a lot based on its variable / fixed dimensions and deciding early on should prevent easily avoidable mistakes in the future. 

* ✅ Make sure that content doesn't overflow.
* 💡 For each text consider using line clamp. Use common sense and project practises for determining the number of lines.
* 💡 Beware positioning of the elements. In various contexts, some elements could be missing. Implement the variations in styleguide. 

### Fixed width cards
Most of the cards with fixed width are heavily presentational, meaning they are opinionated how the content should be presented. Most of the cards has fixed width.

* ✅ Its width is decided by the **card itself**.


### Variable width cards
The cards with variable width are usually navigational and the content is not strict in the sense of presentation.
// video variable width card

* ✅ Its width is decided by its **parent element**.
* ❌ Its width is not determined by its content.

### Fixed height cards
Similarly, cards with fixed height are opinionated how the content should be presented. Most of the bugs in cards are in the cards with fixed height.  

* ✅ Its height is decided by the **card itself**.
* ✅ Use line clamp for all the texts.
* ✅ Use fixed sized blocks for other content (images).

// Example overflow 


### Variable height cards

* ✅ Its height is decided by the **card content**.
* ❌ Its height is not determined by the parent element.
* ✅ Keep the height of multiple cards in the row the same.

// TODO Multiple cards

// TODO Multiple cards alignment 

## Interaction

## Contexts

## Resources
- [Inclusive Components: Cards](https://inclusive-components.design/cards/)
