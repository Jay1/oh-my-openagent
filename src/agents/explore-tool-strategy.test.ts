/// <reference types="bun-types" />

import { describe, expect, it } from "bun:test"
import { createExploreAgent } from "./explore"

describe("explore agent tool strategy", () => {
  const model = "openai/gpt-5.4-mini-fast"

  it("#given the prompt #when inspecting #then routes text patterns to grep", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("**Text patterns**")
    expect(prompt).toContain("grep")
  })

  it("#given the prompt #when inspecting #then routes structural patterns to ast_grep_search", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("**Structural patterns**")
    expect(prompt).toContain("ast_grep_search")
  })

  it("#given the prompt #when inspecting #then routes semantic searches to LSP tools", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("**Semantic search**")
    expect(prompt).toContain("LSP tools")
  })

  it("#given the prompt #when inspecting #then routes file patterns to glob", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("**File patterns**")
    expect(prompt).toContain("glob")
  })

  it("#given the prompt #when inspecting #then routes history searches to git commands", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("**History/evolution**")
    expect(prompt).toContain("git commands")
  })

  it("#given the prompt #when inspecting #then preserves the absolute-path requirement", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("absolute")
    expect(prompt).toContain("<results>")
  })

  it("#given the prompt #when inspecting #then keeps the read-only and no-emoji constraints", () => {
    // given
    const agent = createExploreAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("Read-only")
    expect(prompt).toContain("No emojis")
  })
})
