const sultan = {
  id: `6ot5-b587-4af2-b48x`,
  name: `Sultan Arziyev`,
  imageUrl: `/public/images/sultan.png`,
}

const patrick = {
  id: `p4tr-ik587-4af2-b48x`,
  name: `Patrick`,
  imageUrl: `/public/images/patrick.png`,
}
const patrickAngry = {
  id: `p4tr-an84-4af2-b48x`,
  name: `Patrick`,
  imageUrl: `/public/images/patrick-angry.png`,
}

const dialogs = [
  [
    {
      author: sultan,
      text: `Hi there! 👋<br/> I'm Sultan Arziyev`
    },
    1800,
  ], [
    {
      author: sultan,
      text: `
        It's my pleasure to welcome you!<br>
        Your presence makes me happy.
      `
    },
    3000
  ], [
    {
      author: sultan,
      text: `
        So let me make some introductions to the chat.<br>
        It is very simple to use, type a message then hit <b>Enter</b> or tap the green button.
        It is res..
      `
    },
    4000
  ], [
    {
      author: patrick,
      text: `Hello! I'm Patrick!`
    },
    1500
  ], [
    {
      author: sultan,
      text: `Hey, Patrick! Let me finish my intro, then you can join our conversation, OK?`
    },
    2000
  ], [
    {
      author: patrick,
      text: `👌`
    },
    2800
  ], [
    {
      author: sultan,
      text: `You can change settings by clicking on the <b><i>gear</i></b> on top right corner.`
    },
    3000
  ], [
    {
      author: sultan,
      text: `
        The interface is responsive, check it in your mobile device.
      `
    },
    3500
  ], [
    {
      author: patrick,
      text: `
        Don't type bad words like "****" or "***".<br>
        Okey?
      `
    },
    2500
  ], [
    {
      author: patrickAngry,
      text: `<b>NEVER!</b> 🔫
      `
    },
    5000
  ],
]

export default dialogs
