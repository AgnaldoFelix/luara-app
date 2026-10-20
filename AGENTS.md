<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep client-facing content in `src/data/site.ts` and reference uploaded photography through Lovable Assets JSON pointers so information stays centralized and media stays outside source control.
- Resolve photography pointer URLs to the verified public Lovable asset-serving origin in `src/data/site.ts`, and reuse that absolute URL in components and leaf image metadata so external hosts do not request Lovable-only asset paths from their own origin.
