/// <reference types="bun-types" />

import { describe, expect, it } from "bun:test"
import { createLibrarianAgent } from "./librarian"

describe("librarian agent ast-grep discipline", () => {
  const model = "openai/gpt-5.4-mini-fast"

  it("#given the prompt #when inspecting implementation guidance #then documents ast_grep_search for function discovery", () => {
    // given
    const agent = createLibrarianAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("ast_grep_search")
    expect(prompt).toContain("grep/ast_grep_search for function/class")
  })

  it("#given the prompt #when inspecting tool reference #then directs fast code search to grep_app", () => {
    // given
    const agent = createLibrarianAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("Fast Code Search")
    expect(prompt).toContain("grep_app")
  })

  it("#given the prompt #when inspecting implementation phase #then recommends ast_grep_search for function and class lookup", () => {
    // given
    const agent = createLibrarianAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("grep/ast_grep_search for function/class")
  })

  it("#given the prompt #when inspecting #then preserves the evidence + permalink contract", () => {
    // given
    const agent = createLibrarianAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("GitHub permalinks")
    expect(prompt).toContain("MANDATORY CITATION FORMAT")
  })

  it("#given the prompt #when inspecting #then preserves request classification phases", () => {
    // given
    const agent = createLibrarianAgent(model)

    // when
    const prompt = agent.prompt ?? ""

    // then
    expect(prompt).toContain("TYPE A: CONCEPTUAL")
    expect(prompt).toContain("TYPE B: IMPLEMENTATION")
    expect(prompt).toContain("TYPE C: CONTEXT")
    expect(prompt).toContain("TYPE D: COMPREHENSIVE")
  })
})
