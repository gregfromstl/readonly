import { BoxRenderable, CliRenderer, MarkdownRenderable, SyntaxStyle } from "@opentui/core"

const ascii = `
██████╗ ███████╗ █████╗ ██████╗  ██████╗ ███╗   ██╗██╗  ██╗   ██╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔═══██╗████╗  ██║██║  ╚██╗ ██╔╝
██████╔╝█████╗  ███████║██║  ██║██║   ██║██╔██╗ ██║██║   ╚████╔╝ 
██╔══██╗██╔══╝  ██╔══██║██║  ██║██║   ██║██║╚██╗██║██║    ╚██╔╝  
██║  ██║███████╗██║  ██║██████╔╝╚██████╔╝██║ ╚████║███████╗██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝
`

export default (renderer: CliRenderer) => {
  const logoContainer = new BoxRenderable(renderer, {
    border: ["bottom"],
    borderColor: "#696969",
    paddingBottom: 1
  });

  const logo = new MarkdownRenderable(renderer, {
    syntaxStyle: SyntaxStyle.fromStyles({}),
    content: ascii,
    fg: "#59FFC5",
    alignSelf: "center",
  })

  logoContainer.add(logo)

  return logoContainer
}
